import { randomCreatures } from '../src/randomCreatures';
import { sources } from '../src/sources';

describe('the randomCreature function', () => {
  it('will return an object that matches the Creature interface when called with an empty arguments object', () => {
    const creatures = randomCreatures({ count: 10 });
    for (const creature of creatures) {
      expect(typeof creature.name).toEqual('string');
      expect(typeof creature.challengeRating).toEqual('number');
      expect(Array.isArray(creature.terrains)).toBeTruthy();
      expect(typeof creature.type).toEqual('string');
      expect(Object.values(sources).includes(creature.source)).toBeTruthy();
    }
  });

  it('will return the number of creatures specified by the "count" argument', () => {
    expect(randomCreatures({ count: 10 })).toHaveLength(10);
  });

  it('will, given a set of source books, only return creatures from those source books', () => {
    const vaildSources = [sources.BR, sources.MM, sources.MtoF];

    const basicRulesCreaturesOnly = randomCreatures({ count: 10, sources: [sources.BR] });
    for (const creature of basicRulesCreaturesOnly) {
      expect(creature.source === sources.BR).toBeTruthy();
    }

    const validSourceCreatures = randomCreatures({ count: 10, sources: vaildSources });
    for (const creature of validSourceCreatures) {
      expect(vaildSources.includes(creature.source)).toBeTruthy();
    }

    const sourceUndefinedCreatures = randomCreatures({ count: 10 });
    for (const creature of sourceUndefinedCreatures) {
      expect(creature.source).toBeTruthy();
    }
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
    const creaturesWithTypeBeast = randomCreatures({ types: ['Beast'], count: 10 });
    for (const creature of creaturesWithTypeBeast) {
      expect(creature.type).toEqual('Beast');
    }
  });

  it('will only return creatures that have at least one of the terrain options specified', () => {
    const creaturesWithTerrainWater = randomCreatures({ terrains: ['Water'], count: 10 });
    for (const creature of creaturesWithTerrainWater) {
      expect(creature.terrains.includes('Water')).toBeTruthy();
    }

    const creaturesWithTerrainAir = randomCreatures({ terrains: ['Air'], count: 10 });
    for (const creature of creaturesWithTerrainAir) {
      expect(creature.terrains.includes('Air')).toBeTruthy();
    }

    const creaturesWithTerrainLand = randomCreatures({ terrains: ['Land'], count: 10 });
    for (const creature of creaturesWithTerrainLand) {
      expect(creature.terrains.includes('Land')).toBeTruthy();
    }

    const creaturesWithTerrainLandOrWater = randomCreatures({ terrains: ['Land', 'Water'], count: 10 });
    for (const creature of creaturesWithTerrainLandOrWater) {
      expect(creature.terrains.includes('Land') || creature.terrains.includes('Water')).toBeTruthy();
    }
  });
});
