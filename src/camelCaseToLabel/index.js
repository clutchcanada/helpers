import * as R from 'ramda';

const separateWordsFromCamelCase = R.replace(/([a-z0-9])([A-Z])/g, '$1 $2');

const camelCaseToLabel = R.pipe(
  separateWordsFromCamelCase,
  R.adjust(0, R.toUpper),
  R.join(''),
);

export default camelCaseToLabel;
