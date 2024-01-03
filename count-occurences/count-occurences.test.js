const countOccurences = require('./count-occurences');

test('Count Occurences of a Character', () => {
	expect(countOccurences('hello', 'l')).toBe(2);
	expect(countOccurences('programming', 'm')).toBe(2);
	expect(countOccurences('shishirkumar', 's')).toBe(2);
});