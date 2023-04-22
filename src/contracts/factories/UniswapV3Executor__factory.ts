/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  UniswapV3Executor,
  UniswapV3ExecutorInterface,
} from "../UniswapV3Executor";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_reactor",
        type: "address",
      },
      {
        internalType: "address",
        name: "_swapRouter",
        type: "address",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "CallerNotReactor",
    type: "error",
  },
  {
    inputs: [],
    name: "FillerNotOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "NativeTransferFailed",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnerUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract ERC20",
        name: "token",
        type: "address",
      },
    ],
    name: "claimTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "reactor",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "reactor",
                type: "address",
              },
              {
                internalType: "address",
                name: "offerer",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "nonce",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "validationContract",
                type: "address",
              },
              {
                internalType: "bytes",
                name: "validationData",
                type: "bytes",
              },
            ],
            internalType: "struct OrderInfo",
            name: "info",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "maxAmount",
                type: "uint256",
              },
            ],
            internalType: "struct InputToken",
            name: "input",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "recipient",
                type: "address",
              },
            ],
            internalType: "struct OutputToken[]",
            name: "outputs",
            type: "tuple[]",
          },
          {
            internalType: "bytes",
            name: "sig",
            type: "bytes",
          },
          {
            internalType: "bytes32",
            name: "hash",
            type: "bytes32",
          },
        ],
        internalType: "struct ResolvedOrder[]",
        name: "resolvedOrders",
        type: "tuple[]",
      },
      {
        internalType: "address",
        name: "filler",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "path",
        type: "bytes",
      },
    ],
    name: "reactorCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "swapRouter",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b5060405161134838038061134883398101604081905261002f916100ac565b600080546001600160a01b0319166001600160a01b03831690811782556040518392907f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d76908290a350506001600160a01b0391821660a052166080526100ef565b80516001600160a01b03811681146100a757600080fd5b919050565b6000806000606084860312156100c157600080fd5b6100ca84610090565b92506100d860208501610090565b91506100e660408501610090565b90509250925092565b60805160a05161121961012f6000396000818160ed01526102ab0152600081816101140152818161046f01528181610509015261055001526112196000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c8063ab57265011610050578063ab572650146100e8578063c31c9c071461010f578063df8de3e71461013657600080fd5b806313af4035146100775780638da5cb5b1461008c5780639943fa89146100d5575b600080fd5b61008a610085366004610b08565b610149565b005b6000546100ac9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61008a6100e3366004610b75565b61023f565b6100ac7f000000000000000000000000000000000000000000000000000000000000000081565b6100ac7f000000000000000000000000000000000000000000000000000000000000000081565b61008a610144366004610b08565b610747565b60005473ffffffffffffffffffffffffffffffffffffffff1633146101cf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f554e415554484f52495a4544000000000000000000000000000000000000000060448201526064015b60405180910390fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081178255604051909133917f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d769190a350565b60005473ffffffffffffffffffffffffffffffffffffffff848116911614610293576040517fc934696100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610302576040517fe242c1f300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585600081811061031757610317610c27565b90506020028101906103299190610c56565b61033a906040810190602001610b08565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290915060009073ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa1580156103aa573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103ce9190610c94565b90506000878760008181106103e5576103e5610c27565b90506020028101906103f79190610c56565b610405906080810190610cad565b600081811061041657610416610c27565b61042c9260206060909202019081019150610b08565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000081166024830152919250839185169063dd62ed3e90604401602060405180830381865afa1580156104c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104e79190610c94565b101561054e5761054e73ffffffffffffffffffffffffffffffffffffffff84167f00000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610883565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663b858183f604051806080016040528088888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052509385525050306020840152506040808301889052606090920152517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b1681526106189190600401610d14565b6020604051808303816000875af1158015610637573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061065b9190610c94565b5060005b8781101561073c57600089898381811061067b5761067b610c27565b905060200281019061068d9190610c56565b610696906110d6565b905060005b81604001515181101561072757610715826040015182815181106106c1576106c1610c27565b602002602001015160400151836040015183815181106106e3576106e3610c27565b6020026020010151602001518673ffffffffffffffffffffffffffffffffffffffff166109429092919063ffffffff16565b8061071f81611184565b91505061069b565b5050808061073490611184565b91505061065f565b505050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146107c8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f554e415554484f52495a4544000000000000000000000000000000000000000060448201526064016101c6565b6000546040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526108809173ffffffffffffffffffffffffffffffffffffffff90811691908416906370a0823190602401602060405180830381865afa15801561083e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108629190610c94565b73ffffffffffffffffffffffffffffffffffffffff84169190610a1d565b50565b60006040517f095ea7b3000000000000000000000000000000000000000000000000000000008152836004820152826024820152602060006044836000895af13d15601f3d116001600051141617169150508061093c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f415050524f56455f4641494c454400000000000000000000000000000000000060448201526064016101c6565b50505050565b73ffffffffffffffffffffffffffffffffffffffff83166109f75760008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146109b7576040519150601f19603f3d011682016040523d82523d6000602084013e6109bc565b606091505b505090508061093c576040517ff4b3b1bc00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a1873ffffffffffffffffffffffffffffffffffffffff84168383610a1d565b505050565b60006040517fa9059cbb000000000000000000000000000000000000000000000000000000008152836004820152826024820152602060006044836000895af13d15601f3d116001600051141617169150508061093c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f5452414e534645525f4641494c4544000000000000000000000000000000000060448201526064016101c6565b73ffffffffffffffffffffffffffffffffffffffff8116811461088057600080fd5b8035610b0381610ad6565b919050565b600060208284031215610b1a57600080fd5b8135610b2581610ad6565b9392505050565b60008083601f840112610b3e57600080fd5b50813567ffffffffffffffff811115610b5657600080fd5b602083019150836020828501011115610b6e57600080fd5b9250929050565b600080600080600060608688031215610b8d57600080fd5b853567ffffffffffffffff80821115610ba557600080fd5b818801915088601f830112610bb957600080fd5b813581811115610bc857600080fd5b8960208260051b8501011115610bdd57600080fd5b60208301975080965050610bf360208901610af8565b94506040880135915080821115610c0957600080fd5b50610c1688828901610b2c565b969995985093965092949392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112610c8a57600080fd5b9190910192915050565b600060208284031215610ca657600080fd5b5051919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112610ce257600080fd5b83018035915067ffffffffffffffff821115610cfd57600080fd5b6020019150606081023603821315610b6e57600080fd5b60006020808352835160808285015280518060a086015260005b81811015610d4a5782810184015186820160c001528301610d2e565b50600060c082870101529185015173ffffffffffffffffffffffffffffffffffffffff8116604086015291604086015160608601526060860151608086015260c07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116860101935050505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715610e1157610e11610dbf565b60405290565b60405160a0810167ffffffffffffffff81118282101715610e1157610e11610dbf565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715610e8157610e81610dbf565b604052919050565b600082601f830112610e9a57600080fd5b813567ffffffffffffffff811115610eb457610eb4610dbf565b610ee560207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601610e3a565b818152846020838601011115610efa57600080fd5b816020850160208301376000918101602001919091529392505050565b600060c08284031215610f2957600080fd5b60405160c0810167ffffffffffffffff8282108183111715610f4d57610f4d610dbf565b8160405282935084359150610f6182610ad6565b908252602084013590610f7382610ad6565b816020840152604085013560408401526060850135606084015260808501359150610f9d82610ad6565b81608084015260a0850135915080821115610fb757600080fd5b50610fc485828601610e89565b60a0830152505092915050565b600060608284031215610fe357600080fd5b610feb610dee565b90508135610ff881610ad6565b80825250602082013560208201526040820135604082015292915050565b600082601f83011261102757600080fd5b8135602067ffffffffffffffff82111561104357611043610dbf565b611051818360051b01610e3a565b8281526060928302850182019282820191908785111561107057600080fd5b8387015b858110156110c95781818a03121561108c5760008081fd5b611094610dee565b813561109f81610ad6565b815281860135868201526040808301356110b881610ad6565b908201528452928401928101611074565b5090979650505050505050565b600060e082360312156110e857600080fd5b6110f0610e17565b823567ffffffffffffffff8082111561110857600080fd5b61111436838701610f17565b83526111233660208701610fd1565b6020840152608085013591508082111561113c57600080fd5b61114836838701611016565b604084015260a085013591508082111561116157600080fd5b5061116e36828601610e89565b60608301525060c0929092013560808301525090565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036111dc577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b506001019056fea2646970667358221220f16d1ba6688165d11e74523a78a80d11c4a756182871b46a190818b9dd919c5664736f6c63430008130033";

type UniswapV3ExecutorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UniswapV3ExecutorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UniswapV3Executor__factory extends ContractFactory {
  constructor(...args: UniswapV3ExecutorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _reactor: PromiseOrValue<string>,
    _swapRouter: PromiseOrValue<string>,
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<UniswapV3Executor> {
    return super.deploy(
      _reactor,
      _swapRouter,
      _owner,
      overrides || {}
    ) as Promise<UniswapV3Executor>;
  }
  override getDeployTransaction(
    _reactor: PromiseOrValue<string>,
    _swapRouter: PromiseOrValue<string>,
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _reactor,
      _swapRouter,
      _owner,
      overrides || {}
    );
  }
  override attach(address: string): UniswapV3Executor {
    return super.attach(address) as UniswapV3Executor;
  }
  override connect(signer: Signer): UniswapV3Executor__factory {
    return super.connect(signer) as UniswapV3Executor__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniswapV3ExecutorInterface {
    return new utils.Interface(_abi) as UniswapV3ExecutorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapV3Executor {
    return new Contract(address, _abi, signerOrProvider) as UniswapV3Executor;
  }
}
