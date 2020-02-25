import arg from 'arg';
import inquirer from 'inquirer';

export async function cli(args: any) {
  let options = parseArgumentsIntoOptions(args);
  options = await promptForMissingOptions(options);
  console.log(options);
}

function parseArgumentsIntoOptions(rawArgs: string[]): any {
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

async function promptForMissingOptions(options: any) {
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
    spell: options.spell || answers.spell
  };
}
