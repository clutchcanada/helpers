import isValidNumber from './index';

describe('isValidNumber', () => {
  it('should return true if value is a valid number', () => {
    expect(isValidNumber(0)).toBe(true);
    expect(isValidNumber(24)).toBe(true);
  });

  it('should return false if value is not valid number', () => {
    expect(isValidNumber('')).toBe(false);
    expect(isValidNumber('24')).toBe(false);
    expect(isValidNumber(null)).toBe(false);
    expect(isValidNumber(undefined)).toBe(false);
  });
});
