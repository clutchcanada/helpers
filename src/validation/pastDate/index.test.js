import pastDateValidation from "./index";

describe("Future date validation", () => {
  it('should pass if right format and in past', () => {
    expect(pastDateValidation("06/24/1900")).toBe(true);
    expect(pastDateValidation("12/01/1994")).toBe(true);
    expect(pastDateValidation("08/22/2000")).toBe(true);

  });

  it('should fail if wrong format', () => {
    expect(pastDateValidation("24/06/1994")).toBe(false);
    expect(pastDateValidation("01121988")).toBe(false);
    expect(pastDateValidation("22 08 24")).toBe(false);
  });  
  it('should fail if right format but in the future', () => {
    expect(pastDateValidation("24/06/2020")).toBe(false);
    expect(pastDateValidation("12/01/3000")).toBe(false);
    expect(pastDateValidation("08/22/2024")).toBe(false);
  }); 
  
  it('should fail if date is before 1900', () => {
    expect(pastDateValidation("06/24/1899")).toBe(false);
  });
});