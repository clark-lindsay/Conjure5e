import { Creature } from './Creature';
import { creatures as allCreatures } from './creatures';
import { randomInt, range } from './util';
import { isNullOrUndefined } from 'util';

export function randomCreatures({
  challengeRatingMin,
  challengeRatingMax,
  types,
  count
}: randomCreaturesArgs): Creature[] {
  let creatures = Object.values(allCreatures).reduce((accumulator, subList) => accumulator.concat(subList), []);
  if (!isNullOrUndefined(challengeRatingMin)) {
    creatures = creatures.filter(creature => creature.challengeRating >= challengeRatingMin);
  }
  if (!isNullOrUndefined(challengeRatingMax)) {
    creatures = creatures.filter(creature => creature.challengeRating <= challengeRatingMax);
  }
  if (types) {
    creatures = creatures.filter(creature => types.includes(creature.type));
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

interface randomCreaturesArgs {
  challengeRatingMin?: number;
  challengeRatingMax?: number;
  types?: string[];
  count?: number;
}
