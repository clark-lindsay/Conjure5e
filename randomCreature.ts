import { Creature } from './Creature';
import { creatures } from './creatures';
import { randomInt } from './util';
import { isNullOrUndefined } from 'util';

export function randomCreatures({ challengeRatingMin, challengeRatingMax, types }: randomCreaturesArgs): Creature {
  let result = Object.values(creatures).reduce((accumulator, subList) => accumulator.concat(subList), []);
  if (!isNullOrUndefined(challengeRatingMin)) {
    result = result.filter(creature => creature.challengeRating >= challengeRatingMin);
  }
  if (!isNullOrUndefined(challengeRatingMax)) {
    result = result.filter(creature => creature.challengeRating <= challengeRatingMax);
  }
  if (types) {
    result = result.filter(creature => types.includes(creature.type));
  }
  return result[randomInt(0, result.length)];
}

interface randomCreaturesArgs {
  challengeRatingMin?: number;
  challengeRatingMax?: number;
  types?: string[];
  count?: number;
}
