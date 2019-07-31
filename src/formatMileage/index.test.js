import formatMileage from './index';

describe('formatMileage', () => {
  it('should shorten mileage if mileage exists', () => {
    const mileage = 50000
    const result = formatMileage(mileage);

    expect(result).toBe('50K');
  });
  it('should return empty string if mileage does not exist', () => {
    const mileage = null;
    const result = formatMileage(mileage);

    expect(result).toBe('');
  });
});
