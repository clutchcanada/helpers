import * as R from "ramda";
import removeNonNumbers from "../../removeNonNumbers";

const addCommasToNumber = value => {
  const reversedString = value
    .split('')
    .reverse()
    .join('');
  const matchedArrays = reversedString.match(/.{1,3}/g) || [];
  const stringWithCommas = matchedArrays
    .join(',')
    .split('')
    .reverse()
    .join('');
  return stringWithCommas;
};

export default R.pipe(removeNonNumbers, addCommasToNumber);