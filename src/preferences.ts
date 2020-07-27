import { writeFileSync } from 'fs';

export function writeSourcePreferences(sources: string[], destinationFolder = ''): void {
  const data = {
    sources: sources
  };
  const destination = destinationFolder == '' ? 'preferredSources.json' : `${destinationFolder}/preferredSources.json`;

  writeFileSync(destination, JSON.stringify(data));
}
