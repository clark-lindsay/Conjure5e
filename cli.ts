import arg from 'arg';
import inquirer from 'inquirer';
import { conjureAnimals, conjureWoodlandBeings } from './conjurationSpells';

export async function cli(args: any) {
  let options = parseArgumentsIntoOptions(args);
  options = await promptForSpellChoice(options);
  options = await promptForSpellParameters(options);

  let result = [];
  if (options.spell === 'Conjure Animals') {
    result = conjureAnimals({ challengeRating: options.challengeRating || 0, terrains: options.terrains });
  } else {
    result = conjureWoodlandBeings({ challengeRating: options.challengeRating || 0, terrains: options.terrains });
  }
  console.log(result);
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
      choices: ['Conjure Animals', 'Conjure Woodland Beings'],
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
    choices: [0, 0.125, 0.25, 0.5, 1, 2], //TODO: choices need to be spell dependent
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
    challengeRating: answers.challengeRating,
    terrains: answers.terrains
  };
}

interface Options {
  any?: boolean;
  spell?: string;
  challengeRating?: number;
  terrains?: string[];
}
