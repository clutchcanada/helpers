import * as R from 'ramda';
import isTruthy from '../isTruthy';

export default R.unless(isTruthy, R.always(0));
