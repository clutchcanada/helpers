export const validationWrapper = ({ didValidate, value }) => ({
  pass: (passFn) => {
    if (didValidate) passFn(value);
    return validationWrapper({ didValidate, value });
  },
  fail: (failFn) => {
    if (!didValidate) failFn(value);
    return validationWrapper({ didValidate, value });
  },
});

export const createValidationFunction = (
  validationFn,
  validationWrapperDep = validationWrapper,
) => (paramToValidate) => {
  const didValidate = validationFn(paramToValidate);
  return validationWrapperDep({ didValidate, value: paramToValidate });
};

export default createValidationFunction;
