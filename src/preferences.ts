import { writeFileSync, PathLike } from 'fs';

export function writeSourcePreferences(sources: string[], destinationFolder: PathLike = ''): void {
  const data = {
    sources: sources
  };
  const destination = destinationFolder === '' ? 'preferredSources.json' : `${destinationFolder}/preferredSources.json`;

  writeFileSync(destination, JSON.stringify(data));
}

export function recordArguments(
  spell: string,
  challengeRating: number,
  terrains: string[],
  sources: string[],
  destinationFolder: PathLike = ''
): void {
  const data = {
    spell: spell,
    challengeRating: challengeRating,
    terrains: terrains,
    sources: sources
  };

  const destination = destinationFolder ? `${destinationFolder}/lastArguments.json` : 'lastArguments.json';

  writeFileSync(destination, JSON.stringify(data));
}
