/**
 * Given a number representing the number of miliseconds since the Unix Epoch,
 * returns a date formatted with time, day, month, and year
 * @param {number} -14182940000
 * @returns {string} July 20, 1969 04:17 PM
 */

const formatDateWithTime = date => {
  // Without the conditional, it was returning 'Invalid Date Invalid Date' when given an invalid date
  if (new Date(date).toString() === 'Invalid Date') {
    return 'Invalid Date';
  } else {
    return `${new Date(date).toLocaleDateString('en', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })} ${new Date(date).toLocaleTimeString('en', {
      hour: '2-digit',
      minute: '2-digit',
    })}`;
  }
};

export default formatDateWithTime;
