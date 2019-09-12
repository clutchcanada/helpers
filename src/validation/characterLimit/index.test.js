import charLimit from "./index";

describe("characterLimit", () => {
  it('should return a function that validates the character length of a string', () => {
      const characterLimit20 = characterLimit(20);

      expect(characterLimit20("11111")).toBe(true);
      expect(characterLimit20("111111111111111111111")).toBe(false);
  });
});