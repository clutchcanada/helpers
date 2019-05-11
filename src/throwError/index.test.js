import throwError from './index';

describe('throwError', () => {
  it('should throw the error with the string passed to the function', () => {
    const expectedError = 'I am an error';
    const test = () => {
      throwError(expectedError);
    };

    expect(test).toThrowError(expectedError);
  });
});
