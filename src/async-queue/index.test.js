import asyncQueue from "./index";

describe("asyncQueue", () => {
  const mockAsync = () => new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hi")
    }, Math.random() * 1000);
  });
  it('should give results of all async functions', async (done) => {
    const functions = [
      mockAsync,
      mockAsync,
      mockAsync,
      mockAsync,
      mockAsync,
      mockAsync,
    ];

    const myQueue = asyncQueue({ asyncFunctionArray: functions });
    const results = await myQueue.process();
    expect(results).toEqual(["hi","hi","hi","hi","hi","hi"]);
    done();
  });

  it('should call onResult when a function resolves', (done) => {
    const functions = [
      mockAsync,
      mockAsync,
      mockAsync,
      mockAsync,
      mockAsync,
      mockAsync,
    ];

    const myQueue = asyncQueue({ asyncFunctionArray: functions });
    myQueue.onResult(({ result, allResults }) => {
      expect(result).toEqual("hi");
      expect(allResults).toEqual(["hi"]);
      myQueue.cancel();
      done();
    });
    myQueue.process();
  });

  it('should be able to cancel the queue', async (done) => {
    const functions = [
      mockAsync,
      mockAsync,
      mockAsync,
      mockAsync,
      mockAsync,
      mockAsync,
    ];

    const myQueue = asyncQueue({ asyncFunctionArray: functions });
    myQueue.onResult(() => {
      myQueue.cancel();
    });
    const results = await myQueue.process();
    expect(results.length < functions.length).toBe(true);
    done();
  });

  it('should be able to resume queue', async (done) => {

    const onResultMock = jest.fn();
    const functions = [
      mockAsync,
      mockAsync,
      mockAsync,
      mockAsync,
      mockAsync,
      mockAsync,
    ];

    const myQueue = asyncQueue({ asyncFunctionArray: functions });
    myQueue.onResult(() => {
      myQueue.cancel();
      onResultMock();
    });
    const results = await myQueue.process();
    expect(results.length < functions.length).toBe(true);
    myQueue.onResult(onResultMock);
    const results2 = await myQueue.process();
    expect(results2.length).toBe(functions.length);
    expect(onResultMock).toHaveBeenCalledTimes(functions.length);
    done();
  });

  it('should spawn as many consumers as specified in the concurrentCount', async (done) => {
    const functions = [
      mockAsync,
      mockAsync,
      mockAsync,
      mockAsync,
      mockAsync,
      mockAsync,
    ];

    const myQueue = asyncQueue({ asyncFunctionArray: functions, concurrentCount: 3 });
    myQueue.onResult(() => {
      myQueue.cancel();
    });
    const results = await myQueue.process();
    expect(results.length).toBe(3);
    done();
  });
  
  it('should preserve order of functions', async (done) => {
    const createMockAsync = (value) => () => new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(value)
      }, Math.random() * 1000);
    });

    const functions = [
      createMockAsync(1),
      createMockAsync(2),
      createMockAsync(3),
      createMockAsync(4),
      createMockAsync(5),
      createMockAsync(6),
      createMockAsync(7),
      createMockAsync(8),
      createMockAsync(9),
    ];
    const myQueue = asyncQueue({ asyncFunctionArray: functions, concurrentCount: 3 });
    const results = await myQueue.process();
    expect(results).toEqual([1,2,3,4,5,6,7,8,9])
    done();
  });

  it('should return an error object if there is an error', async (done) => {
    const mockErrorAsync = () => new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("yolo");
      }, Math.random() * 1000);
    });
    const functions = [
      mockAsync,
      mockAsync,
      mockAsync,
      mockErrorAsync,
      mockAsync,
      mockAsync,
    ];

    const myQueue = asyncQueue({ asyncFunctionArray: functions, concurrentCount: 3 });
    const results = await myQueue.process();
    expect(results[2].error).not.toBeDefined();
    expect(results[3].error).toBeDefined();
    done();
  });

  it('should call onError on error', async (done) => {
    const mockErrorAsync = () => new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("yolo");
      }, Math.random() * 1000);
    });
    const functions = [
      mockAsync,
      mockAsync,
      mockAsync,
      mockErrorAsync,
      mockAsync,
      mockAsync,
    ];

    const myQueue = asyncQueue({ asyncFunctionArray: functions, concurrentCount: 3 });
    myQueue.onError(({ error, index}) => {
      expect(error).toBe("yolo");
      expect(index).toBe(3);
      done();
    })
    await myQueue.process();
  });
});