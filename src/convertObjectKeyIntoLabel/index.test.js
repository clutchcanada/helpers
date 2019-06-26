import convertObjectKeyIntoLabel from './index';

describe('convertObjectKeyIntoLabel', () => {
  it('should return the label, given an object key', () => {
    const objectKey = "OBJECT_KEY";
    const expectedOutput = "Object key";
    expect(convertObjectKeyIntoLabel(objectKey)).toBe(expectedOutput);
  });
});
