import * as R from 'ramda';
import throwError from '../throwError';

const formatMileage = mileage => mileage.toLocaleString('en-CA');

export default mileage => {
  if (R.isNil(mileage)) {
    throwError('No mileage found');
  }
  if (!R.is(Number, mileage)) {
    throwError('Your mileage is not a number');
  }
  return formatMileage(mileage);
};
