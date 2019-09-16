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

  it('should call onResponse when a function resolves', (done) => {
    const functions = [
      mockAsync,
      mockAsync,
      mockAsync,
      mockAsync,
      mockAsync,
      mockAsync,
    ];

    const myQueue = asyncQueue({ asyncFunctionArray: functions });
    myQueue.onResponse(({ result, allResults }) => {
      expect(result).toEqual("hi");
      // expect(allResults).toEqual(["hi"]) //TODO: Fix
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
    myQueue.onResponse(() => {
      myQueue.cancel();
    });
    const results = await myQueue.process();
    expect(results.length < functions.length).toBe(true);
    done();
  });

  it('should be able to resume queue', async (done) => {

    const onResponseMock = jest.fn();
    const functions = [
      mockAsync,
      mockAsync,
      mockAsync,
      mockAsync,
      mockAsync,
      mockAsync,
    ];

    const myQueue = asyncQueue({ asyncFunctionArray: functions });
    myQueue.onResponse(() => {
      myQueue.cancel();
      onResponseMock();
    });
    const results = await myQueue.process();
    expect(results.length < functions.length).toBe(true);
    myQueue.onResponse(onResponseMock);
    const results2 = await myQueue.process();
    expect(results2.length).toBe(functions.length);
    expect(onResponseMock).toHaveBeenCalledTimes(functions.length);
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
    myQueue.onResponse(() => {
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
        throw new Error("yolo");
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
});