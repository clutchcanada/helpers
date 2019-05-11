import addKey from './index';

describe('addKey', () => {
  it('should create a randomly generated id and assign it to the key property upon return', () => {
    const dummyItems = ['hey', 'hey2'];
    const dummyItemsWithKey = dummyItems.map(addKey);

    dummyItemsWithKey.forEach(({ key }) => {
      expect(typeof key).toEqual('string');
      expect(key.length).toBeTruthy();
    });
  });

  it('should return the original value under the item property', () => {
    const dummyItems = ['hey', 'hey2'];
    const dummyItemsWithKey = dummyItems.map(addKey);

    dummyItemsWithKey.forEach(({ item }, index) => {
      expect(item).toBe(dummyItems[index]);
    });
  });
});
