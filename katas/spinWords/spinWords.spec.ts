import { spinWords } from './spinWords';

describe('spinWords', () => {
  it('should return string with words longer than 5 chars reversed', () => {
    expect(spinWords('Hey fellow warriors')).toBe('Hey wollef sroirraw');
  });
});
