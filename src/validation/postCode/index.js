const postCodeRegex = new RegExp(/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/);
export default value => postCodeRegex.test(value);
