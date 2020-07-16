import { writeSourcePreferences } from '../src/preferences';
import { sources } from '../src/sources';
import { readFileSync } from 'fs';

describe('the writeSourcePreferences function', () => {
  it('writes the sources in the form of a ts string array', () => {
    const expected = `export const preferredSources = ['${sources.BR}','${sources.MM}','${sources.DMG}'];`;
    writeSourcePreferences([sources.BR, sources.MM, sources.DMG]);

    const actual = readFileSync('preferredSources.ts', 'utf8');

    expect(actual).toEqual(expected);
  });
});
