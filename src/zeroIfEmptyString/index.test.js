import zeroIfEmptyString from './index';

describe('zeroIfEmptyString', () => {
  it('should give 0 if given empty string', () => {
    expect(zeroIfEmptyString('')).toBe('0');
  });

  it('should return the given value if anything else', () => {
    expect(zeroIfEmptyString(0)).toBe(0);
    expect(zeroIfEmptyString(20)).toBe(20);
    expect(zeroIfEmptyString('hey')).toEqual('hey');
    expect(zeroIfEmptyString([])).toEqual([]);
  });
});
