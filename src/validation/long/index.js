const validateLong = (num) => Number.isFinite(num) && Math.abs(num) <= 180;

export default validateLong;
