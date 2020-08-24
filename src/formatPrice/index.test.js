import formatPrice from './index';

describe('formatPrice', () => {
  it('should format the price correctly given a number', () => {
    const price = 18950;
    const result = formatPrice(price);

    expect(result).toBe('$18,950');
  });

  it('should show cents if dropCents equals false', () => {
    const price = 18950;
    const result = formatPrice(price, false);

    expect(result).toBe('$18,950.00');
  });

  it('should handle negative values', () => {
    const price = -18950;
    const result = formatPrice(price, false);

    expect(result).toBe('-$18,950.00');
  });
});
