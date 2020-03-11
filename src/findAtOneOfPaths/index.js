import * as R from 'ramda';

const findAtOneOfPaths = R.curry((paths, obj) =>
  R.reduce(
    R.pipe(
      R.nthArg(1),
      R.path(R.__, obj),
      R.ifElse(R.isNil, R.always(null), R.reduced),
    ),
    null,
    paths,
  ),
);

export default findAtOneOfPaths;
