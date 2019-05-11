import extractKey from './index';

describe('extractKey', () => {
  it('should return the key of the object passed', () => {
    const myObject = { key: 'test ' };
    expect(extractKey(myObject)).toBe(myObject.key);
  });
});
