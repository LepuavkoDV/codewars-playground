import { basicOp } from './basicOp';

describe('basicOp', () => {
  it('should perform given mathematical operation on given arguments', () => {
    expect(basicOp('+', 4, 7)).toBe(11);
    expect(basicOp('-', 15, 18)).toBe(-3);
    expect(basicOp('*', 5, 5)).toBe(25);
    expect(basicOp('/', 49, 7)).toBe(7);
  });
});
