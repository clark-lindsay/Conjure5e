import { writeFileSync } from 'fs';

export function writeSourcePreferences(sources: string[]): void {
  const data = {
    sources: sources
  };
  writeFileSync('preferredSources.json', JSON.stringify(data));
}
