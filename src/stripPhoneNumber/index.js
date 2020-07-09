function stripPhoneNumber(phoneNumber) {
  if (typeof phoneNumber === 'string' || (phoneNumber instanceof String)) {
    const stripedNumber = phoneNumber.replace(/\D/g, '').trim();
    if(stripedNumber.length >= 11 || stripedNumber < 10) {
      return `+${stripedNumber}`;
    } else if (stripedNumber.length === 10) {
      /*
        If its 10 we assume its a North American number with no area code.
      */
      return `+1${stripedNumber}`;
    }
  }

  return null;
}

export default stripPhoneNumber;