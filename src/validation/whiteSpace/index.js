export default (value) => {
  const whiteSpaceRegex = /\s/;
  return !whiteSpaceRegex.test(value);
};
