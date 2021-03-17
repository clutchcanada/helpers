const validateLat = (value) => {
  const latRegex = new RegExp(/^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/);
  return latRegex.test(value);
};

export default validateLat;
