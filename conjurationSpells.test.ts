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
  it('returns the right number of creatures for each possible challenge rating', () => {
    const creaturesWithCRZero = conjureAnimals({ challengeRating: 0 });
    const creaturesWithCROneEighth = conjureAnimals({ challengeRating: 0.125 });
    const creaturesWithCROneQuarter = conjureAnimals({ challengeRating: 0.25 });
    const creaturesWithCROneHalf = conjureAnimals({ challengeRating: 0.5 });
    const creaturesWithCROne = conjureAnimals({ challengeRating: 1 });
    const creaturesWithCRTwo = conjureAnimals({ challengeRating: 2 });

    expect(creaturesWithCRZero.length).toEqual(8);
    expect(creaturesWithCROneEighth.length).toEqual(8);
    expect(creaturesWithCROneQuarter.length).toEqual(8);
    expect(creaturesWithCROneHalf.length).toEqual(4);
    expect(creaturesWithCROne.length).toEqual(2);
    expect(creaturesWithCRTwo.length).toEqual(1);
  });
});
