export default (...functions) => {
  return (...args) => {
    const results = functions.map(fn => fn(...args));
    return results;
  }
}