import { dashatize } from './dashatize';

describe('dashatize', () => {
  it(`If n is an integer, return a string with dash "-" marks before and after each odd integer,
  but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.`, () => {
    expect(dashatize(274)).toBe('2-7-4');
    expect(dashatize(5311)).toBe('5-3-1-1');
    expect(dashatize(86320)).toBe('86-3-20');
    expect(dashatize(974302)).toBe('9-7-4-3-02');
    expect(dashatize(-28369)).toBe('28-3-6-9');
  });
  it('If n is not an integer, return the string "NaN".', () => {
    expect(dashatize(NaN)).toBe('NaN');
    expect(dashatize(0)).toBe('0');
    expect(dashatize(-1)).toBe('1');
  });
});
