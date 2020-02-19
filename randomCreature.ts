import { Creature } from './Creature';

export function randomCreature(): Creature {
  return { name: 'frank', challengeRating: 1, terrains: ['land', 'water'], type: 'beast' };
}
