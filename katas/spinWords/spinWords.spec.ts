import { spinWords } from './spinWords';

describe('spinWords', () => {
  it('should pass fixed test', () => {
    expect(spinWords('Hey fellow warriors')).toBe('Hey wollef sroirraw');
  });
});