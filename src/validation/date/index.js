export default value => {
  const regex = /^(0?[1-9]|1[012])[/-](0?[1-9]|[12][0-9]|3[01])[/-]\d{4}$/;
  return regex.test(value);
};
