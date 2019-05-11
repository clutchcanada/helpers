import extractValueFromEvent from './index';

describe('extractValueFromEvent', () => {
  it('should return the value from a given event', () => {
    const mockValue = 'yoyo';
    const mockEvent = { target: { value: mockValue } };
    expect(extractValueFromEvent(mockEvent)).toBe(mockValue);
  });
});
