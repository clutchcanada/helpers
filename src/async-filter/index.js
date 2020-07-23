import * as R from 'ramda';

const asyncFilter = R.curry(async (array, callback) => {
  const fail = Symbol('Denotes callback failure');
  const callbackResults = await Promise.all(array.map(async (item, index) => {
    const result = await callback(item, index, array);
    return result ? item : fail;
  }));

  return callbackResults.filter(R.complement(R.equals(fail)));
});

export default asyncFilter;
