export default (...functions) => {
  return (...args) => {
    return functions.map(fn => fn(...args));
  }
}