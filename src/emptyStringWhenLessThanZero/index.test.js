import emptyStringWhenLessThanZero from './index';

describe('emptyStringWhenLessThanZero', () => {
  it('should return empty string if value is less than 0', () => {
    expect(emptyStringWhenLessThanZero('-4323')).toEqual('');
    expect(emptyStringWhenLessThanZero(-4323)).toEqual('');
    expect(emptyStringWhenLessThanZero(-50)).toEqual('');
  });

  it('should return the original value when not less than 0', () => {
    expect(emptyStringWhenLessThanZero('4323')).toEqual('4323');
    expect(emptyStringWhenLessThanZero(4323)).toEqual(4323);
    expect(emptyStringWhenLessThanZero(50)).toEqual(50);
  });
});
