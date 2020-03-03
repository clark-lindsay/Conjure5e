import { Creature } from '../src/Creature';

describe('the Creature interface', () => {
  it('has a name: string, challengeRating: number, terrains: string[], and a type: string prop', () => {
    const creature: Creature = {
      name: 'Dog',
      challengeRating: 0.5,
      terrains: ['Land'],
      type: 'Beast'
    };

    expect(creature).toHaveProperty('name');
    expect(creature).toHaveProperty('challengeRating');
    expect(creature).toHaveProperty('terrains');
    expect(creature).toHaveProperty('type');
  });
});
