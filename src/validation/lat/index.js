const validateLat = (num) => Number.isFinite(num) && Math.abs(num) <= 90;

export default validateLat;
