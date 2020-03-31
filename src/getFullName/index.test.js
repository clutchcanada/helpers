import getFullName from './index';

describe('getFullName', () => {
  it('should return the full name if given an object with a name', () => {
    const name = getFullName({
      firstName: 'Bob',
      middleName: 'Smith',
      lastName: 'Jim',
    });

    expect(name).toBe('Bob Smith Jim');
  });

  it('should return a partial name given an incomplete object', () => {
    const name = getFullName({
      firstName: 'Bob',
      lastName: 'Jim',
    });

    expect(name).toBe('Bob Jim');
  });

  it('should return the default value if given an invalid argument', () => {
    const name = getFullName(null);

    expect(name).toBe('N/A');
  });
});
