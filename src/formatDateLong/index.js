/**
 * Given a number representing the number of miliseconds since the Unix Epoch,
 * returns a date formatted with day month and year
 * @param {number} -14182940000
 * @returns {string} July 20, 1969
 */
const formatDateLong = date =>
  new Date(date).toLocaleDateString('en', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

export default formatDateLong;
