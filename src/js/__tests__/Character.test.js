/* eslint-disable no-new */
import Character from '../Character';

test('Character "name" < 2', () => {
  expect(() => {
    new Character('Z', 'Bowman');
  }).toThrowError(new Error('Name не должно быть менее 2 символов и не более 10'));
});

test('Character "name" > 10', () => {
  expect(() => {
    new Character('Zigmigfriddeincshtein', 'Bowman');
  }).toThrowError(new Error('Name не должно быть менее 2 символов и не более 10'));
});

test('Character "indexOf(type) === false"', () => {
  expect(() => {
    new Character('Kris', 'Morgen');
  }).toThrowError(new Error('нет такого значения'));
});

test('Character верны все значения', () => {
  const trueObject = new Character('Kris', 'Zombie');
  expect(trueObject).toEqual({
    attack: 25, defence: 25, health: 100, level: 1, name: 'Kris', type: 'Zombie',
  });
});

test('Character leveUP', () => {
  const trueObject = new Character('Kris', 'Zombie');
  trueObject.leveUP();
  expect(trueObject.health).toBe(100);
  expect(trueObject.attack).toBe(5);
  expect(trueObject.defence).toBe(5);
  expect(trueObject.level).toBe(2);
});

test('Character leveUP toThrowError', () => {
  const trueObject = new Character('Kris', 'Zombie');
  trueObject.health = 0;
  expect(() => { trueObject.leveUP(); }).toThrowError(new Error('нельзя повысить левел умершего'));
});

test('Character damage', () => {
  const trueObject = new Character('Kris', 'Zombie');
  trueObject.damage(2);
  expect(trueObject.health).toBe(98.5);
});

test('Character damage if trueObject.health >= 0', () => {
  const trueObject = new Character('Kris', 'Zombie');
  trueObject.health = -1;
  trueObject.damage(5);
  expect(trueObject.health).toBe(0);
});
