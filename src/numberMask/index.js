import * as R from 'ramda';

// Removes non numeric values but allows preceding - and decimal places
const removeNonNumeric = value => value.replace(/(?<!^)-|[^0-9.-]+/g, '');

const addCommasToNumber = (value = '') => value.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');

const numberMask = R.pipe(
  String,
  removeNonNumeric,
  addCommasToNumber
);

export default numberMask;
