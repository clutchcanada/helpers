import dateValidation from "./index";

describe("date validation", () => {
  it('should pass if right format', () => {
    expect(dateValidation("06/24/1994")).toBe(true);
    expect(dateValidation("12/01/1988")).toBe(true);
    expect(dateValidation("08/22/2024")).toBe(true);
  });

  it('should fail if wrong format', () => {
    expect(dateValidation("24/06/1994")).toBe(false);
    expect(dateValidation("01121988")).toBe(false);
    expect(dateValidation("08 22 24")).toBe(false);
  });  
});