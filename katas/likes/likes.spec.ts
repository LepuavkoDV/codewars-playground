import { likes } from './likes';

describe('likes', () => {
  it('shows "no one likes this" message if string array is empty', () => {
    expect(likes([])).toBe('no one likes this');
  });
  it('shows "%username% likes this" if entry array contains 1 name', () => {
    expect(likes(['Peter'])).toBe('Peter likes this');
  });
  it('shows "%username1% and %username2% like this" if entry array contains 2 names', () => {
    expect(likes(['Peter', 'Max'])).toBe('Peter and Max like this');
  });
  it('shows "%username1%, %username2% and %username3% like this" if entry array contains 3 names', () => {
    expect(likes(['Peter', 'Max', 'David'])).toBe('Peter, Max and David like this');
  });
  it('shows "%username1%, %username2% and n others like this" if entry array contains 4 and more names', () => {
    expect(likes(['Peter', 'Max', 'David', 'Jake'])).toBe('Peter, Max and 2 others like this');
    expect(likes(['Peter', 'Max', 'David', 'Jake', 'Paul'])).toBe('Peter, Max and 3 others like this');
    expect(likes(['Peter', 'Max', 'David', 'Jake', 'Paul', 'Chris'])).toBe('Peter, Max and 4 others like this');
  });
});
