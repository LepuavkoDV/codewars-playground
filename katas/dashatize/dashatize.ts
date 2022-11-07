function isOdd(num: number): boolean {
  return Boolean(num % 2);
}

export function dashatize(num: number): string {
  if (!Number.isInteger(num) || num === 0 || (num < 0 && String(num).length === 2)) {
    return 'NaN';
  }
  const arr = String(num).split('');
  if (arr[0] === '-') {
    delete arr[0];
  }
  for (let i = 0; i <= arr.length; i += 1) {
    const val = Math.abs(Number(arr[i]));
    if (isOdd(val)) {
      if (i === 0) {
        arr[i] = `${val}-`;
      } else if (i === arr.length - 1) {
        arr[i] = `-${val}`;
      } else {
        arr[i] = `-${val}-`;
      }
    }
  }
  return `${arr.join('').replaceAll('--', '-')}`;
}
