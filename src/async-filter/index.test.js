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
    const actual = await asyncFilter(testArray, doesValueMatchIndexAsync);
    expect(actual).toEqual(expectedResult);
  });
});