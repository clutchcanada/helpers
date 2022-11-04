const asyncForEach = async (array, callback) => {
  await array.reduce(async (lastPromise, item, index) => {
    await lastPromise;
    await callback(item, index);
    return true;
  }, Promise.resolve());
};

export default asyncForEach;
