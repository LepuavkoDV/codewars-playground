import { litres } from './litres';

describe('litres', () => {
  it(`Nathan loves cycling. Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
  You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.`, () => {
    expect(litres(2)).toBe(1);
    expect(litres(1.4)).toBe(0);
    expect(litres(12.3)).toBe(6);
    expect(litres(0.82)).toBe(0);
    expect(litres(11.8)).toBe(5);
    expect(litres(1787)).toBe(893);
    expect(litres(0)).toBe(0);
  });
});
