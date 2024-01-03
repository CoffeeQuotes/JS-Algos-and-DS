const findMaxNumber = require('./find-max-number');

test('Find Max Number', () => {
	expect(findMaxNumber([2,4,6])).toBe(6);
	expect(findMaxNumber([5,6,8])).toBe(8);
	expect(findMaxNumber([7,9,10])).toBe(10);
});