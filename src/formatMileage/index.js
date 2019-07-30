const formatMileage = mileage => {
    if (mileage) {
      return mileage.toLocaleString('en-CA');
    }
  
    return '';
};
  
const shortenMileage = mileage =>
    mileage < 1000 ? mileage.toString() : `${Math.round(formatMileage(mileage / 1000))}K`;
  
export default mileage => (mileage < 10000 ? formatMileage(mileage) : shortenMileage(mileage));
  