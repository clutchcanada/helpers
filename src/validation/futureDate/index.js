import * as R from 'ramda';
import moment from 'moment';
import dateValidation from '../date';

const formatDate = R.invoker(0, 'format', 'YYYY-MM-DD');
const isBeforeDate = value => moment().isBefore(value);
const parseDate = date => moment(date, 'DD/MM/YYYY');
const isFutureDate = R.pipe(
  parseDate,
  formatDate,
  isBeforeDate,
);
export default R.allPass([dateValidation, isFutureDate]);
