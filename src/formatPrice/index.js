export default (price, dropCents = true) => {
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

  return `$${(price || 0.0).toLocaleString('en-CA', options)}`;
};
