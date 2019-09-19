import isValidNumber from './index';

describe('isValidNumber', () => {
  it('should return true if value is a valid number', () => {
    const result = isValidNumber(0)
      && isValidNumber(24)

    expect(result).toBe(true);
  });

  it('should return false if value is not valid number', () => {
    const result = isValidNumber(false)
      || isValidNumber('')
      || isValidNumber(null)
      || isValidNumber(undefined);

    expect(result).toBe(false);
  });
});
