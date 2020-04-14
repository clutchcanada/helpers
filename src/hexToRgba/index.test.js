import hexToRgba from './index';

describe('hexToRgba', () => {
  it('should convert a hex code to an rgba value', () => {
    const rgba = hexToRgba({
      hex: '#FFFFFF',
      alpha: 0.5,
    });

    expect(rgba).toBe('rgba(255, 255, 255, 0.5)');
  });

  it('should throw a TypeError on incorrect argument types', () => {
    const rgba = () => hexToRgba({
      hex: 100,
      alpha: 'string'
    });

    expect(rgba).toThrowError(/(Supplied arguments are of wrong type)/g);
  });

  it('should throw an Error if the hex string has a length that is not 7', () => {
    const rgba = () => hexToRgba({
      hex: '#FFFFFFF',
      alpha: 0.5,
    });

    expect(rgba).toThrowError(/(The hex string is the wrong length, please include the #)/g);
  });
})