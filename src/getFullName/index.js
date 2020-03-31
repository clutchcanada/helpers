import * as R from 'ramda';

const getFullName = (object, defaultValue = 'N/A') => {
  const fullNameString = ['firstName', 'middleName', 'lastName']
    .map(R.prop(R.__, object))
    .filter(R.identity)
    .join(' ');
  return fullNameString || defaultValue;
};

export default getFullName;
