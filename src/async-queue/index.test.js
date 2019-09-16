import asyncStream from "./index";

/* 
TODO: 
  3   Test cancel
  test pause
  4. test concurrency
*/
describe("asyncStream", () => {
  const mockAsync = () => new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hi")
    }, 500);
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

    const myQueue = asyncStream({ asyncFunctionArray: functions });
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

    const myQueue = asyncStream({ asyncFunctionArray: functions });
    myQueue.onResponse(({ result, allResults }) => {
      expect(result).toEqual("hi");
      expect(allResults).toEqual(["hi"])
      done();
    });
    myQueue.start();
  });

  it('should ', () => {
    
  })
  
  
});