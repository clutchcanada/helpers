import * as R from 'ramda';

// Removes non numeric values
const removeNonNumeric = value => value.replace(/[^0-9.]+/g, '');

const addCommasToNumber = (value = '') => value.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');

const numberMask = (value) => {
  const stringValue = String(value);
  const isNegative = stringValue.charAt(0) === '-';

  /*
    We did have a negative look behind regex but it is not
    supported in safari so had to to do it more manually
  */
  const numberValue = isNegative ? `-${removeNonNumeric(R.tail(stringValue))}` : removeNonNumeric(stringValue);
  return addCommasToNumber(numberValue);
};

export default numberMask;
