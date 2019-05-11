import { validationWrapper, createValidationFunction } from './index';

describe('createValidationFunction helper', () => {
  describe('validationWrapper', () => {
    it('should call the pass function with the value if didValidate is true', () => {
      const value = 5;
      const mockPass = jest.fn();
      const mockFail = jest.fn();
      validationWrapper({ didValidate: true, value })
        .pass(mockPass)
        .fail(mockFail);
      expect(mockPass).toBeCalledWith(value);
      expect(mockFail).not.toBeCalled();
    });

    it('should call the fail function with the value if didValidate is false', () => {
      const value = 5;
      const mockPass = jest.fn();
      const mockFail = jest.fn();
      validationWrapper({ didValidate: false, value })
        .pass(mockPass)
        .fail(mockFail);
      expect(mockFail).toBeCalledWith(value);
      expect(mockPass).not.toBeCalled();
    });
  });

  describe('createValidationFunction', () => {
    it('should call validationWrapper with the false and the param if fails validation function', () => {
      const validationWrapperSpy = jest.fn();
      const validationFunction = createValidationFunction(
        value => !!value,
        validationWrapperSpy,
      );
      validationFunction(0);
      expect(validationWrapperSpy).toBeCalledWith({
        didValidate: false,
        value: 0,
      });
    });

    it('should call validationWrapper with the true and the param if passes validation function', () => {
      const validationWrapperSpy = jest.fn();
      const validationFunction = createValidationFunction(
        value => !!value,
        validationWrapperSpy,
      );
      validationFunction(1);
      expect(validationWrapperSpy).toBeCalledWith({
        didValidate: true,
        value: 1,
      });
    });
  });
});
