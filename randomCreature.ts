import { Creature } from './Creature';
import { creatures } from './creatures';
import { randomInt } from './util';

export function randomBeast(): Creature {
  const beasts = creatures.beasts;
  return beasts[randomInt(0, beasts.length)];
}
