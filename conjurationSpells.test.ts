import { conjureAnimals } from './conjurationSpells';

describe('the conjureAnimals function', () => {
  it('returns only beasts, regardless of the arguments given', () => {
    const creatures = conjureAnimals({ challengeRating: 0.5 });
    const creatures2 = conjureAnimals({ challengeRating: 0.25 });

    for (const creature of creatures) {
      expect(creature.type).toEqual('Beast');
    }

    for (const creature of creatures2) {
      expect(creature.type).toEqual('Beast');
    }
  });
});
