import sleep from './index';

describe('sleep', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });
  afterAll(() => {
    jest.useRealTimers();
  });

  it('should wait for sleep to finish before executing function', async () => {
    const mockFunction = jest.fn();

    sleep(500).then(mockFunction);

    // Should not call mockFunction if only 20 milliseconds have passed
    jest.advanceTimersByTime(20);
    await Promise.resolve();
    expect(mockFunction).not.toHaveBeenCalled();

    // Should call mockFunction if remaining time has passed
    jest.advanceTimersByTime(480);
    await Promise.resolve();
    expect(mockFunction).toHaveBeenCalled();
  });
});
