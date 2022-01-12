import formatSeconds from './index';

describe('formatSeconds', () => {
  it('should format the seconds correctly given a number', () => {
    const totalSeconds = 234;
    const result = formatSeconds({ totalSeconds });

    expect(result).toBe('03:54');
  });

  it('should handle negative values', () => {
    const totalSeconds = -234;
    const result = formatSeconds({ totalSeconds });

    expect(result).toBe('00:00');
  });
});
