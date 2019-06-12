import hasValue from "./index";

describe("hasValue", () => {
  it('should return true if truthy', () => {
    expect(hasValue(true)).toBe(true);
    expect(hasValue(5)).toBe(true);
    expect(hasValue("dfds")).toBe(true);
  });

  it('should return false if falsey', () => {
    expect(hasValue(false)).toBe(false);
    expect(hasValue(null)).toBe(false);
    expect(hasValue("")).toBe(false);
    expect(hasValue(undefined)).toBe(false);
  });
});