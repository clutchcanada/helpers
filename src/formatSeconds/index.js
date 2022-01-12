/**
 * Given an object conatining totalSeconds, return the minutes and seconds in the
 * format MM:SS, it will pad 0s to ensure we always have 4 digits, e.g 01:01
 * @param {*} Object totalSeconds
 * @returns String MM:SS
 */
const formatSeconds = ({ totalSeconds }) => {
  if (totalSeconds > 0) {
    const mins = String(Math.floor(totalSeconds / 60));
    const seconds = String(totalSeconds % 60);
    return `${mins.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
  }
  return '00:00';
};

export default formatSeconds;
