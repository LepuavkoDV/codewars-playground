function isOdd(num: number): boolean {
  return Boolean(num % 2);
}

export function dashatize(num: number): string {
  const abs = Math.abs(num);
  if (!Number.isInteger(num)) return 'NaN';
  if (abs === 0 || abs === 1) return String(abs);
  let res = String(abs)
    .split('')
    .map((char: string) => (isOdd(Number(char)) ? `-${char}-` : char))
    .join('')
    .split('--')
    .join('-');
  if (res[0] === '-') {
    res = res.substring(1, res.length);
  }
  if (res[res.length - 1] === '-') {
    res = res.slice(0, -1);
  }
  return res;
}
