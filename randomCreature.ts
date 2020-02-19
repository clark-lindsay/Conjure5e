import { Creature } from './Creature';
import { creatures } from './creatures';
import { randomInt } from './util';

export function randomBeast(challengeRating?: number): Creature {
  let beasts = creatures.beasts;
  if (typeof challengeRating !== 'undefined') {
    beasts = beasts.filter(beast => beast.challengeRating === challengeRating);
  }
  return beasts[randomInt(0, beasts.length)];
}
