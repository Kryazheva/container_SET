import Team from '../Team';
import Character from '../Character';

test('add 1 user', () => {
  const team = new Team();
  const user = new Character('User', 'Zombie');
  team.add(user);
  expect(team.members).toContain(user);
  expect(team.members.size).toBe(1);
});

test('add user Throw Error', () => {
  const team = new Team();
  const user = new Character('User', 'Zombie');
  team.add(user);
  expect(() => team.add(user)).toThrowError();
});

test('addAll 4 users', () => {
  const team = new Team();
  const user = new Character('User', 'Magician');
  const user1 = new Character('User1', 'Bowman');
  const user2 = new Character('User2', 'Zombie');
  const user3 = new Character('User3', 'Undead');
  team.addAll(user, user1, user2, user3);
  expect(team.members).toContain(user, user1, user2, user3);
  expect(team.members.size).toBe(4);
});

test('Array.from', () => {
  const team = new Team();
  const user = new Character('User', 'Magician');
  const user1 = new Character('User1', 'Bowman');
  const user2 = new Character('User2', 'Zombie');
  const user3 = new Character('User3', 'Undead');
  team.addAll(user, user1, user2, user3);
  const arr = team.toArray();
  expect(arr).toEqual([user, user1, user2, user3]);
});
