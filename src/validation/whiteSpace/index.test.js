import whiteSpaceValidation from "./index";

describe("whiteSpaceValidation", () => {
  it('should return true if no whitespace', () => {
    expect(whiteSpaceValidation("")).toBe(true);
    expect(whiteSpaceValidation("sdfsd")).toBe(true);
    expect(whiteSpaceValidation("324234")).toBe(true);
  });
  
  it('should return false if whitespace', () => {
    expect(whiteSpaceValidation(" ")).toBe(false);
    expect(whiteSpaceValidation("sd fsd")).toBe(false);
    expect(whiteSpaceValidation("324 23 4")).toBe(false);
  });
});