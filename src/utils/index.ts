export * from './permitPost';

export function stripHexPrefix(a: string): string {
  if (a.startsWith('0x')) {
    return a.slice(2);
  } else {
    return a;
  }
}