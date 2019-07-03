import truthyOrZero from "./index";

describe("truthyOrZero", () => {
  it('should return zero if value passed is falsey', () => {
    expect(truthyOrZero(false)).toBe(0);
    expect(truthyOrZero(0)).toBe(0);
    expect(truthyOrZero(null)).toBe(0);
    expect(truthyOrZero(undefined)).toBe(0);
  });

  it('should return the original value if truthy', () => {
    expect(truthyOrZero(true)).toBe(true);
    expect(truthyOrZero(5)).toBe(5);
    expect(truthyOrZero("hey")).toBe("hey");
    expect(truthyOrZero([])).toEqual([]);
  });  
});