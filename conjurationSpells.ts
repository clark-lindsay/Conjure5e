import { randomCreatures } from './randomCreatures';
import { Creature } from './Creature';

export function conjureAnimals(parameters: ConjurationArguments): Creature[] {
  return randomCreatures({
    challengeRatingMin: parameters.challengeRating,
    challengeRatingMax: parameters.challengeRating
  });
}

interface ConjurationArguments {
  challengeRating: number;
}
