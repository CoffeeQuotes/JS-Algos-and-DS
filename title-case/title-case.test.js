const titleCase = require('./title-case');

test('Count Occurences of a Character', () => {
	expect(titleCase('the Quick brown fox')).toBe('The Quick Brown Fox');
	expect(titleCase('I AM aN engineer')).toBe('I Am An Engineer');
	expect(titleCase('reporT to thE policE')).toBe('Report To The Police');
});