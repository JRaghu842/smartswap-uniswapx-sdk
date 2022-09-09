import hre, { ethers } from 'hardhat';
import { expect } from 'chai';

import DutchLimitOrderReactorAbi from '../../abis/DutchLimitOrderReactor.json';
import PermitPostAbi from '../../abis/PermitPost.json';
import OrderQuoterAbi from '../../abis/OrderQuoter.json';
import MockERC20Abi from '../../abis/MockERC20.json';

import {
  OrderQuoter,
  PermitPost,
  DutchLimitOrderReactor,
  MockERC20,
} from '../../src/contracts';
import {
  DutchLimitOrderBuilder,
  DutchLimitOrder,
  OrderValidator,
  OrderValidation,
} from '../../';

const { BigNumber } = ethers;

describe('OrderValidator', () => {
  let reactor: DutchLimitOrderReactor;
  let permitPost: PermitPost;
  let quoter: OrderQuoter;
  let chainId: number;
  let builder: DutchLimitOrderBuilder;
  let wallet: ethers.Wallet;
  let validator: OrderValidator;
  let tokenIn: MockERC20;
  let tokenOut: MockERC20;

  before(async () => {
    const [admin] = await ethers.getSigners();
    const permitPostFactory = await ethers.getContractFactory(
      PermitPostAbi.abi,
      PermitPostAbi.bytecode
    );
    permitPost = (await permitPostFactory.deploy()) as PermitPost;

    const reactorFactory = await ethers.getContractFactory(
      DutchLimitOrderReactorAbi.abi,
      DutchLimitOrderReactorAbi.bytecode
    );
    reactor = (await reactorFactory.deploy(
      permitPost.address
    )) as DutchLimitOrderReactor;

    const orderQuoterFactory = await ethers.getContractFactory(
      OrderQuoterAbi.abi,
      OrderQuoterAbi.bytecode
    );
    quoter = (await orderQuoterFactory.deploy()) as OrderQuoter;
    chainId = hre.network.config.chainId || 1;
    builder = new DutchLimitOrderBuilder(
      chainId,
      reactor.address,
      permitPost.address
    );

    wallet = ethers.Wallet.createRandom().connect(ethers.provider);
    await admin.sendTransaction({
      to: await wallet.getAddress(),
      value: BigNumber.from(10).pow(18),
    });
    validator = new OrderValidator(ethers.provider, chainId, quoter.address);

    const tokenInFactory = await ethers.getContractFactory(
      MockERC20Abi.abi,
      MockERC20Abi.bytecode
    );
    tokenIn = (await tokenInFactory.deploy('TEST', 'test', 18)) as MockERC20;
    await tokenIn.mint(await wallet.getAddress(), BigNumber.from(10).pow(18));
    await tokenIn
      .connect(wallet)
      .approve(permitPost.address, ethers.constants.MaxUint256);

    const tokenOutFactory = await ethers.getContractFactory(
      MockERC20Abi.abi,
      MockERC20Abi.bytecode
    );
    tokenOut = (await tokenOutFactory.deploy('TEST', 'test', 18)) as MockERC20;
  });

  it('validates a valid order', async () => {
    const deadline = Math.floor(new Date().getTime() / 1000) + 1000;
    const order = builder
      .deadline(deadline)
      .endTime(deadline)
      .startTime(deadline - 1000)
      .nonce(BigNumber.from(100))
      .input({
        token: tokenIn.address,
        amount: BigNumber.from('1000000'),
      })
      .output({
        token: tokenOut.address,
        startAmount: BigNumber.from('1000000000000000000'),
        endAmount: BigNumber.from('900000000000000000'),
        recipient: '0x0000000000000000000000000000000000000000',
      })
      .build();

    const { domain, types, values } = order.permitData();
    const signature = await wallet._signTypedData(domain, types, values);

    expect(await validator.validate(order, signature)).to.equal(
      OrderValidation.OK
    );
  });

  it('validates an order with insufficient funds', async () => {
    const deadline = Math.floor(new Date().getTime() / 1000) + 1000;
    const order = builder
      .deadline(deadline)
      .endTime(deadline)
      .startTime(deadline - 1000)
      .nonce(BigNumber.from(100))
      .input({
        token: tokenIn.address,
        amount: BigNumber.from('10')
          .pow(18)
          .mul(2),
      })
      .output({
        token: tokenOut.address,
        startAmount: BigNumber.from('1000000000000000000'),
        endAmount: BigNumber.from('900000000000000000'),
        recipient: '0x0000000000000000000000000000000000000000',
      })
      .build();

    const { domain, types, values } = order.permitData();
    const signature = await wallet._signTypedData(domain, types, values);

    expect(await validator.validate(order, signature)).to.equal(
      OrderValidation.InsufficientFunds
    );
  });

  it('validates an expired order', async () => {
    const deadline = Math.floor(new Date().getTime() / 1000) + 1;
    const info = builder
      .deadline(deadline)
      .endTime(deadline)
      .startTime(deadline)
      .nonce(BigNumber.from(100))
      .input({
        token: tokenIn.address,
        amount: BigNumber.from('1000000'),
      })
      .output({
        token: tokenOut.address,
        startAmount: BigNumber.from('1000000000000000000'),
        endAmount: BigNumber.from('900000000000000000'),
        recipient: '0x0000000000000000000000000000000000000000',
      })
      .build().info;
    const order = new DutchLimitOrder(
      Object.assign(info, {
        deadline: deadline - 100,
        endTime: deadline - 100,
      }),
      chainId,
      permitPost.address
    );

    const { domain, types, values } = order.permitData();
    const signature = await wallet._signTypedData(domain, types, values);

    expect(await validator.validate(order, signature)).to.equal(
      OrderValidation.Expired
    );
  });

  it('validates an invalid dutch decay', async () => {
    const deadline = Math.floor(new Date().getTime() / 1000) + 1;
    const info = builder
      .deadline(deadline)
      .endTime(deadline)
      .startTime(deadline)
      .nonce(BigNumber.from(100))
      .input({
        token: tokenIn.address,
        amount: BigNumber.from('1000000'),
      })
      .output({
        token: tokenOut.address,
        startAmount: BigNumber.from('1000000000000000000'),
        endAmount: BigNumber.from('900000000000000000'),
        recipient: '0x0000000000000000000000000000000000000000',
      })
      .build().info;
    const order = new DutchLimitOrder(
      Object.assign(info, { endTime: deadline - 100 }),
      chainId,
      permitPost.address
    );

    const { domain, types, values } = order.permitData();
    const signature = await wallet._signTypedData(domain, types, values);

    expect(await validator.validate(order, signature)).to.equal(
      OrderValidation.InvalidOrderFields
    );
  });
});