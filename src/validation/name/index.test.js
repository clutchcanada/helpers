import nameValidation from './index';

describe('nameValidation', () => {
  it('should return false if not two words', () => {
    expect(nameValidation('Craig')).toBe(false);
  });

  it('should return false if number is present', () => {
    expect(nameValidation('Craig 32')).toBe(false);
  });

  it('should return true given first and last name', () => {
    expect(nameValidation('Craig Pullar')).toBe(true);
  });

  it('should return true given first,last and middle name', () => {
    expect(nameValidation('Craig Michael Pullar')).toBe(true);
  });
});
