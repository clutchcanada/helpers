/**
 * Given a Number, return a masked version with commas and squash to 2 fractionals
 * @param {Number} value Number to be masked
 * @returns String
 */
const numberMask = (value) => {
  if (value === null || value === 0 || value === '') return 0;
  const valueAsNumber = parseFloat(value);
  const localeOptions = valueAsNumber % 1 !== 0 ? { minimumFractionDigits: 2 } : {};

  return !Number.isNaN(valueAsNumber) ? valueAsNumber.toLocaleString('en-CA', localeOptions) : '0';
};

export default numberMask;
