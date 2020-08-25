import * as R from 'ramda';

const formatPrice = (price, { dropCents = true } = {}) => {
  const options = {
    style: 'decimal',
    useGrouping: true,
  };

  if (dropCents) {
    options.minimumFractionDigits = 0;
    options.maximumFractionDigits = 0;
  } else {
    options.minimumFractionDigits = 2;
    options.maximumFractionDigits = 2;
  }
  const priceString = (price || 0.0).toLocaleString('en-CA', options);
  if (priceString.charAt(0) === '-') {
    return `-$${R.tail(priceString)}`;
  }
  return `$${priceString}`;
};

export default formatPrice;
