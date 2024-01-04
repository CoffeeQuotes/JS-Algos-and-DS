const removeDuplicates = require('./remove-duplicates');

test('Remove Duplicates from an array', () => {
	expect(removeDuplicates(['shishir','sharad','shishir'])).toEqual(['shishir','sharad']);
	expect(removeDuplicates(['programming','programming','sharad'])).toEqual(['programming','sharad']);
	expect(removeDuplicates(['shishirkumar','ashwani','ashwani'])).toEqual(['shishirkumar','ashwani']);
});