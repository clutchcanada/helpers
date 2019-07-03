import * as R from "ramda";

export default R.when(
  R.pipe(
    Number,
    R.lt(R.__, 0),
  ),
  R.always(''),
);