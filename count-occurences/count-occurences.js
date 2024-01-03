// function countOccurences(str, char) {
// 	let count = 0; 

// 	for(let i = 0; i < str.length; i++) {
// 		// console.log(str[i]);
// 		if(str[i] === char) {
// 			count++;
// 		}
// 	}

// 	return count;
// }
/*
	shortest way using split and arrow func
*/
const countOccurences = (str, char) => str.split(char).length - 1;

module.exports = countOccurences; 