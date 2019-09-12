import charLimit from "./index";

describe("charLimit", () => {
  it('should return a function that validates the character length of a string', () => {
      const charLimit20 = charLimit(20);

      expect(charLimit20("11111")).toBe(true);
      expect(charLimit20("111111111111111111111")).toBe(false);
  });
});