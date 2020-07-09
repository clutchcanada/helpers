import futureDateValidation from "./index";

describe("Future date validation", () => {
  it('should pass if right format and future', () => {
    expect(futureDateValidation("06/24/2022")).toBe(true);
    expect(futureDateValidation("12/01/3000")).toBe(true);
    expect(futureDateValidation("08/22/2024")).toBe(true);
  });

  it('should fail if wrong format', () => {
    expect(futureDateValidation("24/06/1994")).toBe(false);
    expect(futureDateValidation("01121988")).toBe(false);
    expect(futureDateValidation("22 08 24")).toBe(false);
  });  
  it('should fail if right format but in the past', () => {
    expect(futureDateValidation("06/24/1900")).toBe(false);
    expect(futureDateValidation("1/01/1994")).toBe(false);
    expect(futureDateValidation("08/22/2000")).toBe(false);
  });  
})