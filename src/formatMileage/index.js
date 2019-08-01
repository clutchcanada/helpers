import * as R from "ramda";
import throwError from "../throwError";

const formatMileage = mileage => mileage.toLocaleString('en-CA');

const shortenMileage = mileage =>
    mileage < 1000 ? mileage.toString() : `${Math.round(formatMileage(mileage / 1000))}K`;
  
export default mileage => {
    R.isNil(mileage) && throwError("No mileage found");
    !R.is(Number, mileage) && throwError("Your mileage is not a number");
    return shortenMileage(mileage);
}
  