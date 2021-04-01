// Validation Referenced from: https://stackoverflow.com/questions/26407015/javascript-jquery-vin-validator/26408196

// source: https://en.wikipedia.org/wiki/Vehicle_identification_number#Example_Code
const transliterate = c => '0123456789.ABCDEFGH..JKLMN.P.R..STUVWXYZ'.indexOf(c) % 10;

// Validates VIN for North American Vehicles
const isValidVin = vin => {
  if (vin.length !== 17) {
    return { errorMessage: 'VIN must contain 17 characters.', isValid: false };
  }

  // validate check digit
  const map = '0123456789X';
  const weights = '8765432X098765432';
  let sum = 0;

  for (let i = 0; i < 17; ++i) {
    sum += transliterate(vin[i]) * map.indexOf(weights[i]);
  }

  if (map[sum % 11] !== vin[8]) {
    return { errorMessage: 'Invalid VIN format', isValid: false };
  }

  return { isValid: true };
};

export default isValidVin;
