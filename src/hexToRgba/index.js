const hexToRgba = ({ hex, alpha }) => {
  if(typeof hex !== 'string' && typeof alpha !== 'number') {
    throw new TypeError('Supplied arguments are of wrong type');
  }

  if(hex.length !== 7)
      throw new Error('The hex string is the wrong length, please include the #');

  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default hexToRgba;