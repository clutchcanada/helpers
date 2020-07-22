import stripPhoneNumber from ".";

describe("Phone utils", () =>{
  describe("stripPhoneNumber", () => {
    it('should give +54162584913 for (416) 258-4913', () => {
      expect(stripPhoneNumber('(416) 258-4913)')).toBe('+14162584913');
    });

    it('should give +14162584913 for 1 (416) 258-4913', () => {
      expect(stripPhoneNumber('1 (416) 258-4913)')).toBe('+14162584913');
    });

    it('should give +14162584913 for +1 (416) 258-4913', () => {
      expect(stripPhoneNumber('+1 (416) 258-4913)')).toBe('+14162584913');
    });

    it('should give +54162584913 for +5 (416) 258-4913', () => {
      expect(stripPhoneNumber('+5 (416) 258-4913)')).toBe('+54162584913');
    });
    
    it('should give +54162584913 for 5 (416) 258-4913', () => {
      expect(stripPhoneNumber('5 (416) 258-4913)')).toBe('+54162584913');
    });

    it('should give +444162584913 for +44 (416) 258-4913', () => {
      expect(stripPhoneNumber('+44 (416) 258-4913')).toBe('+444162584913');
    });

    it('should give +44416258 for +44 (416) 258', () => {
      expect(stripPhoneNumber('+44 (416) 258')).toBe('+44416258');
    });

    it('should give +14169103549 for 416-910-3549', () => {
      expect(stripPhoneNumber('416-910-3549')).toBe('+14169103549');
    });
  })
})