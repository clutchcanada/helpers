import snakeCaseToReadableString from './index';

describe('snakeCaseToReadableString', () => {
  it('should return the label, given an object key', () => {
    const objectKey = "OBJECT_KEY";
    const expectedOutput = "Object key";
    expect(snakeCaseToReadableString(objectKey)).toBe(expectedOutput);
  });
});
