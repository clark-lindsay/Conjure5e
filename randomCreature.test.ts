import { randomBeast, randomCreature } from './randomCreature';

describe('the randomBeast function', () => {
  it('will return an object that matches the Creature interface, and has type "Beast", when called with no arguments', () => {
    const creature = randomBeast();
    expect(typeof creature.name).toEqual('string');
    expect(typeof creature.challengeRating).toEqual('number');
    expect(Array.isArray(creature.terrains)).toBeTruthy();
    expect(creature.type).toEqual('Beast');
  });

  it('will return only beasts whose challenge rating matches the rating given', () => {
    for (let i = 0; i < 3; ++i) {
      expect(randomBeast(0).challengeRating).toEqual(0);
    }
  });
});

describe('the randomCreature function', () => {
  it('will return an object that matches the Creature interface when called with no arguments', () => {
    const creature = randomCreature();
    expect(typeof creature.name).toEqual('string');
    expect(typeof creature.challengeRating).toEqual('number');
    expect(Array.isArray(creature.terrains)).toBeTruthy();
    expect(typeof creature.type).toEqual('string');
  });

  it('will return only creatures whose challenge rating matches the rating given', () => {
    for (let i = 0; i < 3; ++i) {
      expect(randomCreature(0).challengeRating).toEqual(0);
    }

    for (let i = 0; i < 3; ++i) {
      expect(randomCreature(1).challengeRating).toEqual(1);
    }
  });
});
