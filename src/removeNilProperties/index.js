function removeNilProperties(obj) {
  // eslint-disable-next-line no-restricted-syntax
  for (const propName in obj) {
    if (
      obj[propName] === null ||
      obj[propName] === undefined ||
      obj[propName] === ''
    ) {
      // eslint-disable-next-line no-param-reassign
      delete obj[propName];
    } else if (typeof obj[propName] === 'object') {
      // Recurse here if the property is another object.
      removeNilProperties(obj[propName]);
    }
  }
  return obj;
}

export default removeNilProperties;
