import * as R from "ramda";

const asyncFilter = R.curry(async (array, callback) => {
  const fail = Symbol('Denotes callback failure');
  const callbackResults = await Promise.all(array.map(async (item) => {
    try {
      const result = await callback(item);
      return result ? item : fail;
    } catch (error) {
      return fail;
    }
  }));
  return callbackResults.filter(R.complement(R.equals(fail)));
});

export default asyncFilter;