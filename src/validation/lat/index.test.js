import validateLat from './index';

describe('validateLat', () => {
  it('should pass for valid lat', () => {
    expect(validateLat(43)).toBe(true);
    expect(validateLat(47.1231231)).toBe(true);
    expect(validateLat(-42.122)).toBe(true);
  });

  it('should fail for invalid lat', () => {
    expect(validateLat('asdsad')).toBe(false);
    expect(validateLat([])).toBe(false);
    expect(validateLat({})).toBe(false);
    expect(validateLat(-92)).toBe(false);
  });
});
