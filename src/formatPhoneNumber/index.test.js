import formatPhoneNumber from "./index";

describe("formatPhoneNumber", () => {
  it('should return null if value is not a string or number', () => {
    expect(formatPhoneNumber({})).toBe(null);
    expect(formatPhoneNumber(true)).toBe(null);
    expect(formatPhoneNumber([1,2,3])).toBe(null);
  });
  
  it('should format the phone number correctly', () => {
    expect(formatPhoneNumber("1231231234")).toBe("(123) 123-1234");
  });

  it('should be able to format a partial phone number', () => {
    expect(formatPhoneNumber("12312312")).toBe("(123) 123-12");
  });

  it('should format phoneNumber if number data type', () => {
    expect(formatPhoneNumber(12312312)).toBe("(123) 123-12");
    
  })
  
});