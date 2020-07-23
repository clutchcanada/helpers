import reconstructEvent from './index';

describe('reconstructEvent', () => {
  it('should create the correct object for the value given', () => {
    const expectedObject = {
      target: {
        value: 'hey bud',
      },
    };

    expect(reconstructEvent('hey bud')).toMatchObject(expectedObject);
  });
});
