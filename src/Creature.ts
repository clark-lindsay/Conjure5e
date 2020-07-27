import chalk from 'chalk';
import boxen from 'boxen';

export interface Creature {
  name: string;
  challengeRating: number;
  terrains: string[];
  type: string;
  source: string;
}

export function prettyPrintCreatures(creatures: Creature[]): void {
  let result = '';
  if (creatures.length == 0) {
    result +=
      'No creatures match your parameters.\n Maybe try adding more source books?';
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
  console.log(boxen(result, { padding: 1, borderColor: 'yellow' }));
}
