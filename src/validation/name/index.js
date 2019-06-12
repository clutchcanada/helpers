import * as R from 'ramda';
import hasValue from '../hasValue';

const hasLength = R.pipe(
  R.length,
  R.gt(R.__, 0),
);

const allWordsHaveLength = R.pipe(
  R.split(' '),
  R.all(hasLength),
);
const containsTwoWords = R.pipe(
  R.split(' '),
  R.length,
  R.gte(R.__, 2),
);
const hasNumber = value => /\d/.test(value);
const containsNoNumber = R.pipe(
  R.split(' '),
  R.all(R.complement(hasNumber)),
);

export default R.allPass([
  hasValue,
  allWordsHaveLength,
  containsTwoWords,
  containsNoNumber,
]);
