import numberMask from './index';

describe('numberMasking', () => {
  it('should mask numbers with commas', () => {
    expect(numberMask('1234')).toBe('1,234');
    expect(numberMask('12345')).toBe('12,345');
    expect(numberMask('123456789')).toBe('123,456,789');
    expect(numberMask('99999999')).toBe('99,999,999');
  });
});
