export function tribonacci([a, b, c]: [number, number, number], n: number): number[] {
  const tribonacciSequence: number[] = [];
  if (n === 1) tribonacciSequence.push(a);
  if (n === 2) tribonacciSequence.push(...[a, b]);
  if (n >= 3) tribonacciSequence.push(...[a, b, c]);
  let i = tribonacciSequence.length;
  while (i < n) {
    const next = tribonacciSequence[i - 1] + tribonacciSequence[i - 2] + tribonacciSequence[i - 3];
    tribonacciSequence.push(next);
    i += 1;
  }
  return tribonacciSequence;
}
