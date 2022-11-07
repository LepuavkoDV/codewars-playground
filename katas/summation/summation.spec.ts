import { summation } from './summation';

describe('summation', () => {
  it('finds summation of every number from 1 to num', () => {
    expect(summation(2)).toBe(3);
    expect(summation(8)).toBe(36);
  });
});
