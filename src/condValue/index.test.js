import * as R from "ramda";
import condValue from "./index";

describe("conditionStatic", () => {
  it('should call return the first item if the first function evaluates to true', () => {
      const myCondition = condValue([
        [R.T, 4],
        [R.F, 3],
        [R.T, 2]
      ]);

      expect(myCondition("some value")).toBe(4);
  });
  
  it('should call the second item if the second function evaluates to true', () => {
    const myCondition = condValue([
      [R.F, 4],
      [R.T, 3],
      [R.T, 2]
    ]);

    expect(myCondition("another value")).toBe(3);
  });

  it('should call the third item if the third function evaluates to true', () => {
    const myCondition = condValue([
      [R.F, 4],
      [R.F, 3],
      [(a) => a === 3, 2]
    ]);

    expect(myCondition(3)).toBe(2);
  });
  
});