import sleep from "./index";

describe("sleep", () => {
  it('should wait for sleep to finish before executing function', async() => {

    const mockFunction = jest.fn();

    sleep(500).then(mockFunction);

    jest.advanceTimersByTime(20); 
    await Promise.resolve();
    expect(mockFunction).not.toHaveBeenCalled(); 

    jest.advanceTimersByTime(480); 
    await Promise.resolve();
    expect(mockFunction).toHaveBeenCalled(); 
  });
});