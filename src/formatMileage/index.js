const formatNumbers = mileage => {
    if (mileage) {
      return mileage.toLocaleString('en-CA');
    }
  
    return '';
};
  
const formatThousands = mileage =>
    mileage < 1000 ? mileage.toString() : `${Math.round(formatNumbers(mileage / 1000))}K`;
  
export default mileage => (mileage < 4000 ? formatNumbers(mileage) : formatThousands(mileage));
  