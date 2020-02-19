import { randomInt } from './util';

describe('the randomInt function', () => {
  it('returns a number between the min and the max', () => {
    const random = randomInt(0, 10);

    expect(random).toBeLessThan(10);
    expect(random).toBeGreaterThanOrEqual(0);
  });
});
