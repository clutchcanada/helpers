// logic borrowed from https://github.com/validatorjs/validator.js/blob/master/src/lib/isLatLong.js

const validateLong = value => {
  const longRegex = new RegExp(
    /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/,
  );
  return longRegex.test(value);
};

export default validateLong;
