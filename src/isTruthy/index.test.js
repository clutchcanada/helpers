import isTruthy from './index';

describe('isTruthy', () => {
  it('should return true if the content is truthy', () => {
    const result = isTruthy(true)
      && isTruthy({})
      && isTruthy([1, 2, 3])
      && isTruthy('not undefined');

    expect(result).toBe(true);
  });

  it('should return false if the content is falsy', () => {
    const result = isTruthy(false)
      || isTruthy(0)
      || isTruthy('')
      || isTruthy(null)
      || isTruthy(undefined);

    expect(result).toBe(false);
  });
});
