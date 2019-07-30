import formatMileage from './index';

describe('formatPrice', () => {
  it('should shorten mileage if the mileage is greater than 10000', () => {
    const mileage = 50000
    const result = formatMileage(mileage);

    expect(result).toBe('50K');
  });

  it('should not shorten mileage if the mileage is less than 10000', () => {
    const mileage = 3000
    const result = formatMileage(mileage);

    expect(result).toBe('3,000');
  });
});
