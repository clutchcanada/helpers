import futureDateValidation from "./index";

describe("Future date validation", () => {
  it('should pass if right format and future', () => {
    expect(futureDateValidation("24/06/2020")).toBe(true);
    expect(futureDateValidation("01/12/3000")).toBe(true);
    expect(futureDateValidation("22/08/2024")).toBe(true);
  });

  it('should fail if wrong format', () => {
    expect(futureDateValidation("06/24/1994")).toBe(false);
    expect(futureDateValidation("01121988")).toBe(false);
    expect(futureDateValidation("22 08 24")).toBe(false);
  });  
  it('should fail if right format but in the past', () => {
    expect(futureDateValidation("24/06/1900")).toBe(false);
    expect(futureDateValidation("01/12/1994")).toBe(false);
    expect(futureDateValidation("22/08/2000")).toBe(false);
  });  
})