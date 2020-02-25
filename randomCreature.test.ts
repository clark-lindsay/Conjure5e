import { randomCreatures } from './randomCreature';

describe('the randomCreature function', () => {
  it('will return an object that matches the Creature interface when called with an empty arguments object', () => {
    const creature = randomCreatures({});
    expect(typeof creature.name).toEqual('string');
    expect(typeof creature.challengeRating).toEqual('number');
    expect(Array.isArray(creature.terrains)).toBeTruthy();
    expect(typeof creature.type).toEqual('string');
  });

  it('will return only creatures whose challenge rating matches the rating range given', () => {
    for (let i = 0; i < 10; ++i) {
      expect(randomCreatures({ challengeRatingMax: 0 }).challengeRating).toEqual(0);
    }

    for (let i = 0; i < 10; ++i) {
      expect(randomCreatures({ challengeRatingMax: 1 }).challengeRating).toBeLessThanOrEqual(1);
    }

    for (let i = 0; i < 10; ++i) {
      expect(randomCreatures({ challengeRatingMin: 1 }).challengeRating).toBeGreaterThanOrEqual(1);
    }
  });

  it('will return only beasts when the "types" argument only includes that class of creature', () => {
    for (let i = 0; i < 10; ++i) {
      expect(randomCreatures({ types: ['Beast'] }).type).toEqual('Beast');
    }
  });
});
