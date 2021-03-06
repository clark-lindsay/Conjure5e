import { randomCreatures } from './randomCreatures';
import { Creature } from './Creature';

export function conjureAnimals({ challengeRating, terrains, sources }: ConjurationArguments): Creature[] {
  if (challengeRating > 2 || challengeRating < 0) {
    throw new Error('The challengeRating passed to conjureAnimals must be in the range [0, 2]');
  }
  let count = 1;
  if (challengeRating <= 0.25) {
    count = 8;
  } else if (challengeRating <= 0.5) {
    count = 4;
  } else if (challengeRating <= 1) {
    count = 2;
  } else {
    count = 1;
  }

  return randomCreatures({
    challengeRatingMin: challengeRating,
    challengeRatingMax: challengeRating,
    terrains,
    types: ['Beast'],
    count,
    sources
  });
}

export function conjureWoodlandBeings({ challengeRating, terrains, sources }: ConjurationArguments): Creature[] {
  if (challengeRating > 2 || challengeRating < 0) {
    throw new Error('The challengeRating passed to conjureWoodlandBeings must be in the range [0, 2]');
  }
  let count = 1;
  if (challengeRating <= 0.25) {
    count = 8;
  } else if (challengeRating <= 0.5) {
    count = 4;
  } else if (challengeRating <= 1) {
    count = 2;
  } else {
    count = 1;
  }

  return randomCreatures({
    challengeRatingMin: challengeRating,
    challengeRatingMax: challengeRating,
    terrains,
    types: ['Fey'],
    count,
    sources
  });
}

export function conjureMinorElementals({ challengeRating, terrains, sources }: ConjurationArguments): Creature[] {
  if (challengeRating > 2 || challengeRating < 0) {
    throw new Error('The challengeRating passed to conjureMinorElementals must be in the range [0, 2]');
  }
  let count = 1;
  if (challengeRating <= 0.25) {
    count = 8;
  } else if (challengeRating <= 0.5) {
    count = 4;
  } else if (challengeRating <= 1) {
    count = 2;
  } else {
    count = 1;
  }

  return randomCreatures({
    challengeRatingMin: challengeRating,
    challengeRatingMax: challengeRating,
    terrains,
    types: ['Elemental'],
    count,
    sources
  });
}

interface ConjurationArguments {
  challengeRating: number;
  terrains?: string[];
  sources?: string[];
}
