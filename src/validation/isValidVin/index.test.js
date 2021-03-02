import isValidVin from './index';

describe('Future date validation', () => {
  it('should pass if 17 characters & right format', () => {
    expect(isValidVin('1GNDS13S422497440').isValid).toBe(true);
    expect(isValidVin('5FNRL3H72AB082432').isValid).toBe(true);
    expect(isValidVin('1FMCU93G29KA86195').isValid).toBe(true);
  });

  it('should fail if wrong format or < 17 characters', () => {
    expect(isValidVin('')).toHaveProperty('errorMessage', 'VIN must contain 17 characters.');
    expect(isValidVin('221FC1EV8A9199407')).toHaveProperty('errorMessage', 'Invalid VIN format');
    expect(isValidVin('2G1FC1EV8A9199405')).toHaveProperty('errorMessage', 'Invalid VIN format');
  });
});
