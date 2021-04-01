import * as R from 'ramda';

const removeNonNumeric = (value) => value.replace(/[^0-9.]+/g, '');

/**
 * Given a Number, return a masked version with commas and round to 2 fractionals
 * @param {Number} value Number to be masked
 * @returns String
 */
const numberMask = (value) => {
  if (['-', '', undefined, null].includes(value)) return value || '';
  const stringValue = String(value);
  const isNegative = stringValue.charAt(0) === '-';

  /*
    We did have a negative look behind regex but it is not
    supported in safari so had to to do it more manually
  */
  const numberValue = isNegative ? `-${removeNonNumeric(R.tail(stringValue))}` : removeNonNumeric(stringValue);

  const localeOptions = numberValue % 1 !== 0
    ? { minimumFractionDigits: 2, maximumFractionDigits: 6 }
    : {};
  return Number(numberValue).toLocaleString('en-CA', localeOptions);
};

export default numberMask;
