import { Creature } from './Creature';
import { creatures } from './creatures';
import { randomInt } from './util';

export function randomCreature({ challengeRating, types }: randomCreatureArgs): Creature {
  let result = Object.values(creatures).reduce((accumulator, subList) => accumulator.concat(subList), []);
  if (typeof challengeRating !== 'undefined') {
    result = result.filter(creature => creature.challengeRating === challengeRating);
  }
  if (types) {
    result = result.filter(creature => types.includes(creature.type));
  }
  return result[randomInt(0, result.length)];
}

interface randomCreatureArgs {
  challengeRating?: number;
  types?: string[];
}
