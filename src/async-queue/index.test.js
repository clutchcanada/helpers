import asyncQueue from "./index";

/* 
TODO: 
  3   Test cancel
  test pause
  4. test concurrency
*/
describe("asyncQueue", () => {
  const mockAsync = () => new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hi")
    }, Math.random() * 1000);
  });
  it('should give results of all async functions', (done) => {
    const functions = [
      mockAsync,
      mockAsync,
      mockAsync,
      mockAsync,
      mockAsync,
      mockAsync,
    ];

    const myQueue = asyncQueue({ asyncFunctionArray: functions });
    myQueue.onFinish(({ results }) => {
      expect(results).toEqual(["hi","hi","hi","hi","hi","hi"]);
      done();
    });
    myQueue.start();
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
      // expect(allResults).toEqual(["hi"])
      done();
    });
    myQueue.start();
  });

  it('should be able to cancel the queue', (done) => {
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
    myQueue.onFinish(({ results }) => {
      expect(results.length < functions.length).toBe(true);
      done();
    });
    myQueue.start();
  });
});