import asyncForEach from './index';

describe('asyncForEach', () => {
  const shouldPreserveOrder = [];
  const asyncPush = num => new Promise((resolve, reject) => {
    setTimeout(() => {
      shouldPreserveOrder.push(num);
      resolve(num);
    }, Math.random() * 420);
  });
  
  it('should run the callback on each item in the array, in order', async () => {
    const nums = [0, 1, 2, 3, 4];
    await asyncForEach(nums, asyncPush);
    expect(shouldPreserveOrder).toEqual(nums);
  });
});
