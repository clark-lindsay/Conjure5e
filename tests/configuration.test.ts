import { writeSourcePreferences } from '../src/preferences';
import { sources } from '../src/sources';
import { readFileSync, existsSync, unlinkSync } from 'fs';

describe('the writeSourcePreferences function', () => {
  const testConfigPath = 'tests/preferredSources.json';

  afterEach(() => {
    if (existsSync(testConfigPath)) {
      unlinkSync(testConfigPath);
    }
  });

  it('writes the sources in the form of a json file', () => {
    const expected = {
      sources: [sources.BR, sources.MM, sources.DMG]
    };
    writeSourcePreferences([sources.BR, sources.MM, sources.DMG], 'tests');

    const data = String(readFileSync(testConfigPath));
    const actual = JSON.parse(data);

    expect(actual).toEqual(expected);
  });
});
