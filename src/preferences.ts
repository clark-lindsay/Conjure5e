import { writeFileSync } from 'fs';

export function writeSourcePreferences(sources: string[]): void {
  writeFileSync(
    'preferredSources.ts',
    `export const preferredSources = [${sources.map(sourceBook => {
      return "'" + sourceBook + "'";
    })}];`,
    'utf8'
  );
}
