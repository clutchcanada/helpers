function stripPhoneNumber(phoneNumber) {
  if (typeof phoneNumber === 'string' || (phoneNumber instanceof String)) {
    const stripedNumber = phoneNumber.replace(/\D/g, '').trim();
    if(stripedNumber.length >= 11) {
      return `+${stripedNumber}`;
    } else if (stripedNumber.length === 10) {
      return `+1${stripedNumber}`;
    }
  }

  return null;
}

export default stripPhoneNumber;