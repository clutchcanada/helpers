export default (...functions) => (...args) => functions.map(fn => fn(...args));
