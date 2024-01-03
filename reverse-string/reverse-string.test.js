const reverseString = require('./reverse-string');

test('Count Occurences of a Character', () => {
	expect(reverseString('hello')).toBe('olleh');
	expect(reverseString('programming')).toBe('gnimmargorp');
	expect(reverseString('shishirkumar')).toBe('ramukrihsihs');
});