import arg from 'arg';
import inquirer from 'inquirer';
import { randomCreatures } from './randomCreatures';

export async function cli(args: any) {
  let options = parseArgumentsIntoOptions(args);
  options = await promptForSpellChoice(options);
  options = await promptForSpellParameters(options);
  const creatures = randomCreatures({ challengeRatingMin: options.challengeRating, count: 5 });
  console.log(creatures);
}

function parseArgumentsIntoOptions(rawArgs: string[]): Options {
  const args = arg(
    {
      '--any': Boolean,
      '-a': '--any'
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

  const answers = await inquirer.prompt(questions);
  return {
    ...options,
    challengeRating: answers.challengeRating
  };
}

interface Options {
  any?: boolean;
  spell?: string;
  challengeRating?: number;
}
