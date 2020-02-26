import { Creature } from './Creature';
import { creatures as allCreatures } from './creatures';
import { randomInt, range } from './util';
import { isNullOrUndefined } from 'util';

export function randomCreatures({
  challengeRatingMin,
  challengeRatingMax,
  types,
  count,
  terrains
}: randomCreaturesArgs): Creature[] {
  let creatures = Object.values(allCreatures).reduce((accumulator, subList) => accumulator.concat(subList), []);
  creatures = filterByChallengeRating(challengeRatingMin, challengeRatingMax, creatures);
  creatures = filterByType(types, creatures);
  if (terrains) {
    let filteredCreatures: Creature[] = [];
    for (const terrain of terrains) {
      filteredCreatures = [...filteredCreatures, ...creatures.filter(creature => creature.terrains.includes(terrain))];
    }
    creatures = filteredCreatures;
  }
  if (isNullOrUndefined(count)) {
    return [creatures[randomInt(0, creatures.length)]];
  }

  let result = [];
  for (const _ of range(0, count)) {
    result.push(creatures[randomInt(0, creatures.length)]);
  }
  return result;
}

function filterByChallengeRating(
  challengeRatingMin: number | undefined,
  challengeRatingMax: number | undefined,
  creatures: Creature[]
): Creature[] {
  let result: Creature[] = creatures;
  if (!isNullOrUndefined(challengeRatingMin)) {
    result = result.filter(creature => creature.challengeRating >= challengeRatingMin);
  }
  if (!isNullOrUndefined(challengeRatingMax)) {
    result = result.filter(creature => creature.challengeRating <= challengeRatingMax);
  }
  return result;
}

function filterByType(types: string[] | undefined, creatures: Creature[]): Creature[] {
  let result = creatures;
  if (types) {
    result = result.filter(creature => types.includes(creature.type));
  }
  return result;
}
interface randomCreaturesArgs {
  challengeRatingMin?: number;
  challengeRatingMax?: number;
  types?: string[];
  count?: number;
  terrains?: string[];
}
