import postCodeValidation from './index';

describe('postCodeValidation', () => {
  it('should return true if valid postCode', () => {
    expect(postCodeValidation('M3H8F3')).toBe(true);
  });

  it('should return false if inValid postCode', () => {
    expect(postCodeValidation('M338FT')).toBe(false);
  });

  it('should work regardless of spaces', () => {
    expect(postCodeValidation('M3H8F3')).toBe(true);
    expect(postCodeValidation('M3H 8F3')).toBe(true);
  });
});
