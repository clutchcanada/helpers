import asyncQueue from "./index";

/* 
TODO: 
  4. test concurrency
*/
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
  
  
});