import emailValidation from './index';

describe('email validation', () => {
  it('should pass for valid emails', () => {
    expect(emailValidation('craig.pullar@clutch.ca')).toBe(true);
    expect(emailValidation('test123@test.com')).toBe(true);
    expect(emailValidation('yolo@swaggins.info')).toBe(true);
  });

  it('should fail for invalid emails', () => {
    expect(emailValidation('craig. pullar@clutch.ca')).toBe(false);
    expect(emailValidation('test123test.com')).toBe(false);
    expect(emailValidation('yolo@swaggins.324info.')).toBe(false);
  });
});
