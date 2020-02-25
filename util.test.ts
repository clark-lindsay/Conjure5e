import { randomInt, range } from './util';

describe('the randomInt function', () => {
  it('returns a number between the min and the max', () => {
    const random = randomInt(0, 10);

    expect(random).toBeLessThan(10);
    expect(random).toBeGreaterThanOrEqual(0);
  });
});

describe('the range function', () => {
  it('returns a range from the given start to the given end value, inclusive-exclusive', () => {
    expect(range(0, 5)).toEqual([0, 1, 2, 3, 4]);
    expect(range(10, 15)).toEqual([10, 11, 12, 13, 14]);
  });

  it('throws an error if the end value is greater than the start', () => {
    expect(() => range(10, 9)).toThrow();
  });

  it('throws an error if the start or end is negative', () => {
    expect(() => range(-1, 4)).toThrow();
    expect(() => range(0, -5)).toThrow();
  });
});
