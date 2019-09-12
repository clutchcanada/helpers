import * as R from 'ramda';

const characterLimit = R.curry((characterLimit, value) => R.length(value) <= characterLimit);

export default characterLimit;
