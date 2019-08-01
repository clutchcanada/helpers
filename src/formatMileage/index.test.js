import formatMileage from './index';

describe('formatMileage', () => {
  it('should shorten mileage if mileage exists', () => {
    const mileage = 50000
    const result = formatMileage(mileage);

    expect(result).toBe('50K');
  });
  it('should throw error if mileage does not exist', () => {
    const mileage = null;
    const result = () => formatMileage(mileage);

    expect(result).toThrowError();
  });
  it('should display mileage is mileage is 0', () => {
    const mileage = 0;
    const result = formatMileage(mileage);

    expect(result).toBe('0');
  });
  it('should throw error if mileage is not a number', () => {
    const mileage = "TEST";
    const result = () => formatMileage(mileage);

    expect(result).toThrowError();
  });
});
