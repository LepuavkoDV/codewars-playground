import { solution } from './endingWith';

describe('endingWith', () => {
  it('string from first argument ends with string from second argument', () => {
    expect(solution('abc', 'bc')).toBe(true);
    expect(solution('abcde', 'abc')).toBe(false);
    expect(solution('abc', '')).toBe(true);
  });
});
