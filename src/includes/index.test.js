import includes from './index';

describe('includes', () => {
  it('should return true if element is in array', () => {
    expect(includes([1, 2, 3], 1)).toBe(true);
  });

  it('should return false if element is not in array', () => {
    expect(includes([1, 2, 3], 4)).toBe(false);
  });
});
