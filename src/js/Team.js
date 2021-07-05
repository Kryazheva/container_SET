// eslint-disable-next-line lines-around-directive
'use srtict';
export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error(`Дубликат персонажа ${character}`);
    } this.members.add(character);
  }

  addAll(...rest) {
    rest.forEach((item) => this.members.add(item));
  }

  toArray() {
    return Array.from(this.members.values());
  }
}
