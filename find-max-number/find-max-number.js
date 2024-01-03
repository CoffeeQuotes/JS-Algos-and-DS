function findMaxNumber(numberArray) {
	// return Max.max(...numberArray); simple but cheap
	let currentMax = numberArray[0];
	for(let i=1; i < numberArray.length; i++) {
		if(numberArray[i] > currentMax) {
			currentMax = numberArray[i];
		}
	}
	return currentMax; 
}

module.exports = findMaxNumber;