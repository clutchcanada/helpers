import * as R from "ramda";

export default (conditionsArray) => {
  const conditionsArrayToPassToRamda = conditionsArray.map(
      ([condition, valueToReturn]) => [condition, R.always(valueToReturn)]
  );
  return R.cond(conditionsArrayToPassToRamda);
}