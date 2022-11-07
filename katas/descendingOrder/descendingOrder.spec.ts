import { descendingOrder } from './descendingOrder';

describe('descendingOrder', () => {
  it('should return number with digits in descending order', () => {
    expect(descendingOrder(0)).toBe(0);
    expect(descendingOrder(1)).toBe(1);
    expect(descendingOrder(123456789)).toBe(987654321);
  });
});
