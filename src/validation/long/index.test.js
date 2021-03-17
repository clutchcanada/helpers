import validateLong from './index';

describe('validateLong', () => {
  it('should pass for valid long', () => {
    expect(validateLong(43)).toBe(true);
    expect(validateLong(47.1231231)).toBe(true);
    expect(validateLong(-42.122)).toBe(true);
  });

  it('should fail for invalid long', () => {
    expect(validateLong('asdsad')).toBe(false);
    expect(validateLong([])).toBe(false);
    expect(validateLong({})).toBe(false);
    expect(validateLong(-182)).toBe(false);
    expect(validateLong(182)).toBe(false);
  });
});
