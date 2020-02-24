import { Creature } from './Creature';
import { creatures } from './creatures';
import { randomInt } from './util';

export function randomCreature(challengeRating?: number): Creature {
  let result = Object.values(creatures).reduce((accumulator, subList) => accumulator.concat(subList), []);
  if (typeof challengeRating !== 'undefined') {
    result = result.filter(creature => creature.challengeRating === challengeRating);
  }
  return result[randomInt(0, result.length)];
}

export function randomBeast(challengeRating?: number): Creature {
  let beasts = creatures.beasts;
  if (typeof challengeRating !== 'undefined') {
    beasts = beasts.filter(beast => beast.challengeRating === challengeRating);
  }
  return beasts[randomInt(0, beasts.length)];
}
