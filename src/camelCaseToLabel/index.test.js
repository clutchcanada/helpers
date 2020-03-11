import camelCaseToLabel from './index';

describe('camelCaseToLabel', () => {
  it('should return a capitalized label, given a camelcase string', () => {
    const camelCaseString = 'iAmTheSenate';
    expect(camelCaseToLabel(camelCaseString)).toBe('I Am The Senate');
  });

  it('should still work when there are numbers in the string', () => {
    const nonContrivedExample = 'auth0Id';
    expect(camelCaseToLabel(nonContrivedExample)).toBe('Auth0 Id');
  });
});
