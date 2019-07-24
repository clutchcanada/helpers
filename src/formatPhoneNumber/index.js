import * as R from "ramda";
import throwError from "../throwError";

export default (value) => {
  !R.is(String, value) && throwError("value passed to formatPhoneNumber must be a string");
  const x = value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  return !x[2] ? x[1] : `(${x[1]}) ${x[2]}${x[3] ? `-${x[3]}` : ''}`;
};