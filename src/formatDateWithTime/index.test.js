import dayjs from 'dayjs';
import formatDateLong from './index';

describe('formatDateWithTime', () => {
  it('should format the date correctly given the number  of miliseconds since the Unix Epoch', () => {
    const moonLanding = -14182940000;
    const result = formatDateLong(moonLanding);

    const expectedResult = dayjs(moonLanding).format('MMMM D, YYYY hh:mm A');
    expect(result).toBe(expectedResult);
  });

  it('should handle an invalid date', () => {
    const date = 'my birthday';
    const result = formatDateLong(date);

    expect(result).toBe('Invalid Date');
  });
});
