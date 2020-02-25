import { randomCreature } from './randomCreature';

describe('the randomCreature function', () => {
  it('will return an object that matches the Creature interface when called with an empty arguments object', () => {
    const creature = randomCreature({});
    expect(typeof creature.name).toEqual('string');
    expect(typeof creature.challengeRating).toEqual('number');
    expect(Array.isArray(creature.terrains)).toBeTruthy();
    expect(typeof creature.type).toEqual('string');
  });

  it('will return only creatures whose challenge rating matches the rating given', () => {
    for (let i = 0; i < 3; ++i) {
      expect(randomCreature({ challengeRating: 0 }).challengeRating).toEqual(0);
    }

    for (let i = 0; i < 3; ++i) {
      expect(randomCreature({ challengeRating: 1 }).challengeRating).toEqual(1);
    }
  });

  it('will return only beasts when the "types" argument only includes that class of creature', () => {
    for (let i = 0; i < 3; ++i) {
      expect(randomCreature({ types: ['Beast'] }).type).toEqual('Beast');
    }
  });
});
