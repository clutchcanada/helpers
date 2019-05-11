import preventDefault from './index';

describe('preventDefault', () => {
  it('should call the preventDefault function on an event', () => {
    const mockEvent = {
      preventDefault: jest.fn(),
    };

    preventDefault(mockEvent);
    expect(mockEvent.preventDefault).toBeCalled();
  });

  it('should return the same event', () => {
    const mockEvent = {
      preventDefault: jest.fn(),
      value: 2,
    };

    expect(preventDefault(mockEvent)).toEqual(mockEvent);
  });
});
