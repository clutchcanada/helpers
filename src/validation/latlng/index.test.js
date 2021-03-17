import validateLatLng from './index';

describe('validateLatLng', () => {
  it('should pass for valid lat lngs', () => {
    expect(validateLatLng(43)).toBe(true);
    expect(validateLatLng(47.1231231)).toBe(true);
    expect(validateLatLng(-42.122)).toBe(true);
    expect(validateLatLng(-122.85)).toBe(true);
  });

  it('should fail for invalid lat lngs', () => {
    expect(validateLatLng('asdsad')).toBe(false);
    expect(validateLatLng([])).toBe(false);
    expect(validateLatLng({})).toBe(false);
  });
});
