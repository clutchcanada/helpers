const asyncForEach = async (array, callback) => {
  await array.reduce(async (lastPromise, item) => {
    await lastPromise;
    await callback(item);
    return true;
  }, Promise.resolve());
};

export default asyncForEach;
