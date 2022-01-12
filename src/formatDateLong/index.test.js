import formatDateLong from './index';

describe('formatDateLong', () => {
  it('should format the date correctly given the number  of miliseconds since the Unix Epoch', () => {
    const moonLanding = -14182940000;
    const result = formatDateLong(moonLanding);

    expect(result).toBe('July 20, 1969');
  });

  it('should handle an invalid date', () => {
    const date = 'my birthday';
    const result = formatDateLong(date);

    expect(result).toBe('Invalid Date');
  });
});
