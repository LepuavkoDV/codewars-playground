import { paperwork } from './paperwork';

describe('paperwork', () => {
  it('should pass fixed tests', () => {
    expect(paperwork(5, 5)).toBe(25);
    expect(paperwork(5, -5)).toBe(0);
    expect(paperwork(-5, -5)).toBe(0);
    expect(paperwork(-5, 5)).toBe(0);
    expect(paperwork(5, 0)).toBe(0);
  });
});
