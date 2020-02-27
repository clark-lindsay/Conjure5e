import { conjureAnimals, conjureWoodlandBeings } from './conjurationSpells';

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

    expect(creaturesWithCRZero.length === 8 || creaturesWithCRZero.length === 0).toBeTruthy();
    expect(creaturesWithCROneEighth.length === 8 || creaturesWithCROneEighth.length === 0).toBeTruthy();
    expect(creaturesWithCROneQuarter.length === 8 || creaturesWithCROneQuarter.length === 0).toBeTruthy();
    expect(creaturesWithCROneHalf.length === 4 || creaturesWithCROneHalf.length === 0).toBeTruthy();
    expect(creaturesWithCROne.length === 2 || creaturesWithCROne.length === 0).toBeTruthy();
    expect(creaturesWithCRTwo.length === 1 || creaturesWithCRTwo.length === 0).toBeTruthy();
  });

  it('will throw an error if it is given a challengeRating above 2 or below 0', () => {
    expect(() => conjureAnimals({ challengeRating: 3 })).toThrow();
    expect(() => conjureAnimals({ challengeRating: -1 })).toThrow();
  });
});

describe('the conjureWoodlandBeings function', () => {
  it('returns only fey, regardless of the arguments given', () => {
    const creatures = conjureWoodlandBeings({ challengeRating: 0.5, terrains: ['Land'] });
    const creatures2 = conjureWoodlandBeings({ challengeRating: 1, terrains: ['Air'] });
    const creatures3 = conjureWoodlandBeings({ challengeRating: 2, terrains: ['Water', 'Land'] });

    for (const creature of creatures) {
      expect(creature.type).toEqual('Fey');
    }

    for (const creature of creatures2) {
      expect(creature.type).toEqual('Fey');
    }

    for (const creature of creatures3) {
      expect(creature.type).toEqual('Fey');
    }
  });

  it('returns the right number, or zero, of creatures for each possible challenge rating', () => {
    const creaturesWithCRZero = conjureWoodlandBeings({ challengeRating: 0 });
    const creaturesWithCROneEighth = conjureWoodlandBeings({ challengeRating: 0.125 });
    const creaturesWithCROneQuarter = conjureWoodlandBeings({ challengeRating: 0.25 });
    const creaturesWithCROneHalf = conjureWoodlandBeings({ challengeRating: 0.5 });
    const creaturesWithCROne = conjureWoodlandBeings({ challengeRating: 1 });
    const creaturesWithCRTwo = conjureWoodlandBeings({ challengeRating: 2 });

    expect(creaturesWithCRZero.length === 8 || creaturesWithCRZero.length === 0).toBeTruthy();
    expect(creaturesWithCROneEighth.length === 8 || creaturesWithCROneEighth.length === 0).toBeTruthy();
    expect(creaturesWithCROneQuarter.length === 8 || creaturesWithCROneQuarter.length === 0).toBeTruthy();
    expect(creaturesWithCROneHalf.length === 4 || creaturesWithCROneHalf.length === 0).toBeTruthy();
    expect(creaturesWithCROne.length === 2 || creaturesWithCROne.length === 0).toBeTruthy();
    expect(creaturesWithCRTwo.length === 1 || creaturesWithCRTwo.length === 0).toBeTruthy();
  });

  it('will throw an error if it is given a challengeRating above 2 or below 0', () => {
    expect(() => conjureWoodlandBeings({ challengeRating: 3 })).toThrow();
    expect(() => conjureWoodlandBeings({ challengeRating: -1 })).toThrow();
  });
});
