/* 
function removeDuplicates(arr) {
	const uniqureArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (!uniqureArr.includes(arr[i])) {
			uniqureArr.push(arr[i]);
		}
	}
	return uniqureArr;
}
*/

function removeDuplicates(arr) {
	return Array.from(new Set(arr));
}
module.exports = removeDuplicates;