var expect = require('expect');

var {isRealString} = require('./validation');

	describe('isRealString', () => {
	
	//should reject non string values
	it('should reject non string values', () => {
	var res = isRealString(98);
	expect(res).toBe(false);
	});
	
	//should reject string with only spaces
    it('should reject string with only spaces', () => {
	var res = isRealString('      ');
	expect(res).toBe(false);
	});
	
	
	//should allow string with non space character
	it('should allow string with non space character', () => {
	var res = isRealString('  Mariben  ');
	expect(res).toBe(true);
	});
  
});
