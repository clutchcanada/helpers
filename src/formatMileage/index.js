const formatMileage = mileage => mileage.toLocaleString('en-CA');

const shortenMileage = mileage =>
    mileage < 1000 ? mileage.toString() : `${Math.round(formatMileage(mileage / 1000))}K`;
  
export default mileage => !!mileage ? shortenMileage(mileage) : '';
  