import numberMask from './index';

describe('numberMasking', () => {
  it('should mask numbers with commas', () => {
    expect(numberMask(1234)).toBe('1,234');
    expect(numberMask('12345')).toBe('12,345');
    expect(numberMask('123456789')).toBe('123,456,789');
    expect(numberMask('99999999')).toBe('99,999,999');
    expect(numberMask('-99999999')).toBe('-99,999,999');
    expect(numberMask('-')).toBe('-');
    expect(numberMask('-99999-9')).toBe('-999,999');
    expect(numberMask('99999-')).toBe('99,999');
    expect(numberMask('')).toBe('');
    expect(numberMask('0')).toBe('0');
    expect(numberMask(0)).toBe('0');
    expect(numberMask(undefined)).toBe('');
    expect(numberMask(55.10)).toBe('55.10');
    expect(numberMask('55.10')).toBe('55.10');
    expect(numberMask(55.01)).toBe('55.01');
    expect(numberMask('55.01')).toBe('55.01');
    expect(numberMask(55.011)).toBe('55.011');
    expect(numberMask('55,555')).toBe('55,555');
    expect(numberMask(29678.0002345)).toBe('29,678.000235');
    expect(numberMask(29678.00023451)).toBe('29,678.000235');
  });
});
