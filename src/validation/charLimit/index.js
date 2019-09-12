import * as R from 'ramda';

const charLimit = R.curry((charLimit, value) => R.length(value) <= charLimit);

export default charLimit;
