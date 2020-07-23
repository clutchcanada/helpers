import * as R from 'ramda';

export default R.when(R.equals(''), R.always('0'));
