/* eslint-disable strict */
// eslint-disable-next-line lines-around-directive
'use strict';
const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Name не должно быть менее 2 символов и не более 10');
    } else {
      this.name = name;
    }

    if (!types.includes(type)) {
      throw new Error('нет такого значения');
    } else {
      this.type = type;
    }
    this.health = 100;
    this.level = 1;
    this.attack = 25;
    this.defence = 25;
  }

  leveUP() {
    if (this.health > 0) {
      this.level += 1;
      this.defence *= 20 / 100;
      this.attack *= 20 / 100;
      this.health = 100;
    } else {
      throw new Error('нельзя повысить левел умершего');
    }
  }

  damage(points) {
    // eslint-disable-next-line no-unused-expressions
    this.health >= 0 ? this.health -= points * (1 - this.defence / 100) : this.health = 0;
  }
}
