const isPalindrome = require('./palindrome');

test('Check if the string is a palindrome', () => {
	expect(isPalindrome('hello')).toBe(false);
	expect(isPalindrome('racecar')).toBe(true);
	expect(isPalindrome('shishirkumar')).toBe(false);
});