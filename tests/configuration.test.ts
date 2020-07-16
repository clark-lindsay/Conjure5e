import { writeSourcePreferences } from '../src/preferences';
import { sources } from '../src/sources';
import { readFileSync } from 'fs';

describe('the writeSourcePreferences function', () => {
  it('writes the sources in the form of a ts string array', () => {
    const expected = {
      sources: [sources.BR, sources.MM, sources.DMG]
    };
    writeSourcePreferences([sources.BR, sources.MM, sources.DMG]);

    const data = String(readFileSync('preferredSources.json'));
    const actual = JSON.parse(data);

    expect(actual).toEqual(expected);
  });
});
