import Character from '../swordsman';

describe('this class creates a new character', () => {
  test('create a new character', () => {
    const character = new Character('Test');
    const result = {
      name: 'Test',
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    };
    expect(character).toMatchObject(result);
  });
});
