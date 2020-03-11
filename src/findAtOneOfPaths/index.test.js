import findAtOneOfPaths from './index';

describe('findAtOneOfPaths', () => {
  const finder = findAtOneOfPaths([['a', 1], ['c', 'd'], ['e', 'f']]);

  it('should check each of the given paths for until it finds a non-null/undefined value', () => {
    expect(finder({ a: [420, 69] })).toBe(69);
    expect(finder({ c: { d: 1337 } })).toBe(1337);
    expect(finder({ c: 420, e: { f: 'blah' } })).toBe('blah');
  });

  it('should return the first non-null/undefined value it finds', () => {
    const bigObject = { a: [420, 69], c: { d: 1337 }, e: { f: 'blah' } }
    expect(findAtOneOfPaths([['a', 1], ['c', 'd'], ['e', 'f']], bigObject)).toBe(69);
    expect(findAtOneOfPaths([['c', 'd'], ['a', 1], ['e', 'f']], bigObject)).toBe(1337);
    expect(findAtOneOfPaths([['e', 'f'], ['a', 1], ['c', 'd']], bigObject)).toBe('blah');
  });

  it('should return null if no value is found', () => {
    expect(finder({ a: [109], c: { d: undefined }, e: { nice: 69 } })).toBe(null);
    expect(finder({})).toBe(null);
    expect(finder('not even an object')).toBe(null);
  });
});
