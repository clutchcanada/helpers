import * as R from "ramda";

const asyncFilter = R.curry(async (callback, array) => {
  const fail = Symbol('Denotes callback failure');
  const callbackResults = await Promise.all(array.map(async (item, index) => {
    try {
      const result = await callback(item, index, array);
      return result ? item : fail;
    } catch (error) {
      console.log(error);
      return fail;
    }
  }));
  return callbackResults.filter(R.complement(R.equals(fail)));
});

export default asyncFilter;