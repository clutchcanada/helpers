// logic borrowed from https://github.com/validatorjs/validator.js/blob/master/src/lib/isLatLong.js

const validateLat = value => {
  const latRegex = new RegExp(/^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/);
  return latRegex.test(value);
};

export default validateLat;
