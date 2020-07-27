import boxen from 'boxen';
import {
  conjureAnimals,
  conjureWoodlandBeings,
  conjureMinorElementals
} from './conjurationSpells';
import { prettyPrintCreatures } from './Creature';
import { sources } from './sources';
import { readFileSync, existsSync } from 'fs';

recast();

export async function recast() {
  let result = [];
  if (existsSync('lastArguments.json')) {
    let args;
    try {
      args = JSON.parse(String(readFileSync('lastArguments.json')));
    } catch (_) {
      args = {
        spell: 'Conjure Animals',
        terrains: ['Land'],
        sources: [sources.BR, sources.MM, sources.DMG],
        challengeRating: 1
      };
    }
    switch (args.spell) {
      case 'Conjure Animals':
        result = conjureAnimals({
          challengeRating: args.challengeRating,
          terrains: args.terrains,
          sources: args.sources
        });
        break;
      case 'Conjure Minor Elementals':
        result = conjureMinorElementals({
          challengeRating: args.challengeRating,
          terrains: args.terrains,
          sources: args.sources
        });
        break;
      default:
        result = conjureWoodlandBeings({
          challengeRating: args.challengeRating,
          terrains: args.terrains,
          sources: args.sources
        });
        break;
    }
    prettyPrintCreatures(result);
  } else {
    console.log(
      boxen(
        'Whoops! It looks like you have not cast a spell before.\n You should try "npm start" first.',
        { padding: 1, borderColor: 'yellow' }
      )
    );
  }
}
