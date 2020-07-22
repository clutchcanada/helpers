import formatPhoneNumber from "./index";

describe("formatPhoneNumber", () => {

  it('should return the arguement if passed null or undefined', () => {
    expect(formatPhoneNumber(null)).toBe(null);
    expect(formatPhoneNumber(undefined)).toBe(undefined);
  });
  
  it('should return null if value is not a string or number', () => {
    const test1 = () => {
      formatPhoneNumber({})
    };
    const test2 = () => {
      formatPhoneNumber(true)
    };
    const test3 = () => {
      formatPhoneNumber([1,2,3])
    };

    expect(test1).toThrowError();
    expect(test2).toThrowError();
    expect(test3).toThrowError();
  });
  
  it('should format the phone number correctly', () => {
    expect(formatPhoneNumber("1231231234")).toBe("(123) 123-1234");
  });

  it('should be able to format a partial phone number', () => {
    expect(formatPhoneNumber("12312312")).toBe("(123) 123-12");
  });

  it('should format phoneNumber if number data type', () => {
    expect(formatPhoneNumber(12312312)).toBe("(123) 123-12");
  });

  it('should give (416) 910-3549 for +14169103549', () => {
    expect(formatPhoneNumber('+14169103549')).toBe('(416) 910-3549')
  });
  
  
});