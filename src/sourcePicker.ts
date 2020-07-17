import arg from 'arg';
import inquirer from 'inquirer';
import { sources } from './sources';
import { readFileSync } from 'fs';
import { writeSourcePreferences } from './preferences';

cli(process.argv);

async function cli(args: any) {
  let options = parseArgumentsIntoOptions(args);
  options = await promptForSources(options);

  writeSourcePreferences(options.any ? Object.values(sources) : options.sources);
  console.log('Your preferences have been recorded.');
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
    sources: []
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

interface Options {
  any: boolean;
  sources: string[];
}
