import asyncFilter from "./index";

describe("AsyncFilter", () => {

  it('should filter out falsey results', async () => {
    const doesValueMatchIndexAsync = (item, index) => new Promise((resolve) => {
      setTimeout(() => {
        resolve(item === index);
      }, 200);
    });
    const testArray = [0,1,2,5,4];
    const expectedResult = [0,1,2,4];
    const actual = await asyncFilter(doesValueMatchIndexAsync, testArray);
    expect(actual).toEqual(expectedResult);
  });

  it('should filter out results that error', async () => {
    const testError = (item) => new Promise((resolve) => {
      if(item === 5) {
        throw new Error("oops");
      }
      resolve(true);
    });
    const testArray = [0,1,2,5,4];
    const expectedResult = [0,1,2,4];
    const actualResult = await asyncFilter(testError, testArray);
    expect(actualResult).toEqual(expectedResult);
  });
});