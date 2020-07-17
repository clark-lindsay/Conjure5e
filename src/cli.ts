import arg from 'arg';
import inquirer from 'inquirer';
import chalk from 'chalk';
import boxen from 'boxen';
import { conjureAnimals, conjureWoodlandBeings, conjureMinorElementals } from './conjurationSpells';
import { Creature } from './Creature';
import { sources } from './sources';
import { readFileSync } from 'fs';

export async function cli(args: any) {
  let options = parseArgumentsIntoOptions(args);
  options = await promptForSpellChoice(options);
  options = await promptForSpellParameters(options);
  options = await promptForSources(options);

  let result = [];
  const spellArguments = {
    challengeRating: options.challengeRating || 0,
    terrains: options.terrains,
    sources: options.sources
  };
  if (options.spell === 'Conjure Animals') {
    result = conjureAnimals(spellArguments);
  } else if (options.spell === 'Conjure Minor Elementals') {
    result = conjureMinorElementals(spellArguments);
  } else {
    result = conjureWoodlandBeings(spellArguments);
  }
  prettyPrintCreatures(result);
}

function parseArgumentsIntoOptions(rawArgs: string[]): Options {
  const args = arg(
    {
      '--any': Boolean,
      '-A': '--any'
    },
    {
      argv: rawArgs.slice(2)
    }
  );

  return {
    any: args['--any'] || false,
    spell: args._[0]
  };
}

async function promptForSpellChoice(options: Options): Promise<Options> {
  if (options.any) {
    return { ...options };
  }

  const defaultSpell = 'Conjure Animals';
  const questions = [];
  if (!options.spell) {
    questions.push({
      type: 'list',
      name: 'spell',
      message: 'Please choose which spell you would like to cast.',
      choices: ['Conjure Animals', 'Conjure Woodland Beings', 'Conjure Minor Elementals'],
      default: defaultSpell
    });
  }

  const answers = await inquirer.prompt(questions);
  return {
    ...options,
    spell: options.spell || String(answers.spell)
  };
}

async function promptForSpellParameters(options: any): Promise<Options> {
  if (options.any) {
    return { ...options };
  }

  const questions = [];
  questions.push({
    type: 'list',
    name: 'challengeRating',
    message: 'Please choose what challenge rating you would like the summoned creatures to be:',
    choices: [0, 0.125, 0.25, 0.5, 1, 2],
    default: 1
  });
  questions.push({
    type: 'checkbox',
    name: 'terrains',
    message:
      'Please choose what terrains are present where the creatures are to be summoned ([Space] to make a selection):',
    choices: ['Land', 'Water', 'Air'],
    default: ['Land']
  });
  const answers = await inquirer.prompt(questions);
  return {
    ...options,
    challengeRating: Number(answers.challengeRating),
    terrains: answers.terrains
  };
}

async function promptForSources(options: any): Promise<Options> {
  if (options.any) {
    return { ...options };
  }

  let defaultSources;
  try {
    defaultSources = JSON.parse(String(readFileSync('preferredSources.json'))).sources;
  } catch (_) {
    defaultSources = [sources.BR, sources.MM, sources.DMG];
  }

  const questions = [];
  questions.push({
    type: 'checkbox',
    name: 'sources',
    message: 'Please choose what sources are available and relevant to you:',
    choices: Object.values(sources),
    default: defaultSources
  });
  const answers = await inquirer.prompt(questions);
  return {
    ...options,
    sources: answers.sources
  };
}

function prettyPrintCreatures(creatures: Creature[]): void {
  let result = '';
  if (creatures.length == 0) {
    result += 'No creatures match your parameters.\n Maybe try adding more source books?';
  }
  for (const creature of creatures) {
    let creatureName = '';
    if (creature.terrains.includes('Air')) {
      creatureName = chalk.bold(chalk.magenta(creature.name));
    } else if (creature.terrains.includes('Water')) {
      creatureName = chalk.bold(chalk.cyan(creature.name));
    } else {
      creatureName = chalk.bold(chalk.green(creature.name));
    }
    result += `${creatureName}\n\n`;
  }
  console.log(boxen(result, { padding: 1, borderColor: 'red' }));
}

interface Options {
  any?: boolean;
  spell?: string;
  challengeRating?: number;
  terrains?: string[];
  sources?: string[];
}
