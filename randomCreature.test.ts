import { randomBeast } from './randomCreature';

describe('the randomBeast function', () => {
  it('will return an object that matches the Creature interface when called with no arguments', () => {
    const creature = randomBeast();
    expect(typeof creature.name).toEqual('string');
    expect(typeof creature.challengeRating).toEqual('number');
    expect(Array.isArray(creature.terrains)).toBeTruthy();
    expect(typeof creature.type).toEqual('string');
  });
});
