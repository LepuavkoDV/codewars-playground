import { paperwork } from './paperwork';

describe('paperwork', () => {
  it('should return multiplied numbers if both of them are > 0', () => {
    expect(paperwork(5, 5)).toBe(25);
    expect(paperwork(5, -5)).toBe(0);
    expect(paperwork(-5, -5)).toBe(0);
    expect(paperwork(-5, 5)).toBe(0);
    expect(paperwork(5, 0)).toBe(0);
  });
});
