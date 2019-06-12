import * as R from 'ramda';
import moment from 'moment';
import dateValidation from '../date';

const formatDate = R.invoker(0, 'format', 'YYYY-MM-DD');
const parseDate = date => moment(date, 'DD/MM/YYYY');
const isAfterDate = value => moment().isAfter(value);
const yearIsGreaterOrEqualTo1900 = R.pipe(
  parseDate,
  momentDate => momentDate.year() >= 1900,
);
const isPastDate = R.pipe(
  parseDate,
  formatDate,
  isAfterDate,
);

export default R.allPass([
  dateValidation,
  isPastDate,
  yearIsGreaterOrEqualTo1900,
]);
