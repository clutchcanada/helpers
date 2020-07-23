const validateLatLng = (value) => {
  const latLngRegex = new RegExp(/^(?=.)-?((8[0-5]?)|([0-7]?[0-9]))?(?:\.[0-9]{1,20})?$/);
  return latLngRegex.test(value);
};

export default validateLatLng;
