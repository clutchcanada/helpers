import removeNilProperties from './index';

describe('removeNilProperties function', () => {
  it('should remove null properties', () => {
    const inputObject = {
      a: null,
      b: 1,
    };

    const expectedObject = { b: 1 };

    expect(removeNilProperties(inputObject)).toEqual(expectedObject);
  });

  it('should remove undefined properties', () => {
    const inputObject = {
      a: undefined,
      b: 1,
    };

    const expectedObject = { b: 1 };

    expect(removeNilProperties(inputObject)).toEqual(expectedObject);
  });

  it('should remove empty string properties', () => {
    const inputObject = {
      a: '',
      b: 1,
    };

    const expectedObject = { b: 1 };

    expect(removeNilProperties(inputObject)).toEqual(expectedObject);
  });

  it('should remove nested null properties', () => {
    const inputObject = {
      a: {
        c: null,
        d: 2,
      },
      b: 1,
    };

    const expectedObject = { a: { d: 2 }, b: 1 };

    expect(removeNilProperties(inputObject)).toEqual(expectedObject);
  });
});
