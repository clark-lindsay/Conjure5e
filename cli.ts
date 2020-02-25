import arg from 'arg';

export function cli(args: any): void {
  const options = parseArgumentsIntoOptions(args);
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
    template: args._[0]
  };
}
