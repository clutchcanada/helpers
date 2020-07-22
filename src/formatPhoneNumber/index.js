import * as R from "ramda";
import throwError from "../throwError";

export default (value) => {
  if(R.isNil(value)) {
    return value;
  }
  if(![String, Number].some(type => R.is(type, value) )) {
    throwError("Value passed to formatPhoneNumber must be a string or number");
  }
  const x = value.toString().replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})$/);
  return !x[2] ? x[1] : `(${x[1]}) ${x[2]}${x[3] ? `-${x[3]}` : ''}`;
};