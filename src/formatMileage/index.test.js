import formatMileage from './index';

describe('formatPrice', () => {
  it('should shorten mileage if the mileage', () => {
    const mileage = 50000
    const result = formatMileage(mileage);

    expect(result).toBe('50K');
  });
});
