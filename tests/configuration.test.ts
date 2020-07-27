import { writeSourcePreferences, recordArguments } from '../src/preferences';
import { sources } from '../src/sources';
import { readFileSync, existsSync, unlinkSync } from 'fs';

describe('the writeSourcePreferences function', () => {
  const testConfigPath = 'tests/preferredSources.json';

  afterEach(() => {
    if (existsSync(testConfigPath)) {
      unlinkSync(testConfigPath);
    }
  });

  it('writes the sources in the form of a json file, which can be parsed', () => {
    const expected = {
      sources: [sources.BR, sources.MM, sources.DMG]
    };
    writeSourcePreferences([sources.BR, sources.MM, sources.DMG], 'tests');

    const data = String(readFileSync(testConfigPath));
    const actual = JSON.parse(data);

    expect(actual).toEqual(expected);
  });
});

describe('the recordArguments function', () => {
  const testArgumentsPath = 'tests/lastArguments.json';

  afterEach(() => {
    if (existsSync(testArgumentsPath)) {
      unlinkSync(testArgumentsPath);
    }
  });

  it('writes the arguments and spell name used in the invocation of a conjuration function to a json file, which can be parsed', () => {
    const expected = {
      sources: [sources.BR, sources.MM, sources.DMG],
      challengeRating: 1,
      terrains: ['Land'],
      spell: 'Conjure Animals'
    };
    recordArguments(expected.spell, expected.challengeRating, expected.terrains, expected.sources, 'tests');

    const data = String(readFileSync(testArgumentsPath));
    const actual = JSON.parse(data);

    expect(actual).toEqual(expected);
  });
});
