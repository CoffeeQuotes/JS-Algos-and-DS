const countVowels = require('./count-vowels');

test('Count the numbers of vowels in a string', () => {
	expect(countVowels('hello world')).toBe(3);
	expect(countVowels('racecar india')).toBe(6);
	expect(countVowels('shishir kumar')).toBe(4);
});