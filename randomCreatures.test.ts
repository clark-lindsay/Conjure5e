import { randomCreatures } from './randomCreature';

describe('the randomCreature function', () => {
  it('will return an object that matches the Creature interface when called with an empty arguments object', () => {
    const creature = randomCreatures({})[0];
    expect(typeof creature.name).toEqual('string');
    expect(typeof creature.challengeRating).toEqual('number');
    expect(Array.isArray(creature.terrains)).toBeTruthy();
    expect(typeof creature.type).toEqual('string');
  });

  it('will return the number of creatures specified by the "count" argument', () => {
    expect(randomCreatures({ count: 10 })).toHaveLength(10);
  });

  it('will return only creatures whose challenge rating matches the rating range given', () => {
    const creaturesWithCRZero = randomCreatures({ challengeRatingMax: 0, count: 10 });
    for (const creature of creaturesWithCRZero) {
      expect(creature.challengeRating).toEqual(0);
    }

    const creaturesWithCRLessThanEqualToOne = randomCreatures({ challengeRatingMax: 1, count: 10 });
    for (const creature of creaturesWithCRLessThanEqualToOne) {
      expect(creature.challengeRating).toBeLessThanOrEqual(1);
    }

    const creaturesWithCRMinimumOne = randomCreatures({ challengeRatingMin: 1, count: 10 });
    for (const creature of creaturesWithCRMinimumOne) {
      expect(creature.challengeRating).toBeGreaterThanOrEqual(1);
    }
  });

  it('will return only beasts when the "types" argument only includes that class of creature', () => {
    for (let i = 0; i < 10; ++i) {
      expect(randomCreatures({ types: ['Beast'] })[0].type).toEqual('Beast');
    }
  });
});
