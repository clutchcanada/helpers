import * as R from 'ramda';

const characterLimit = R.curry((specifiedLimit, value) => R.length(value) <= specifiedLimit);

export default characterLimit;
