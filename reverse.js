let arr1 = [];

const reverse = function (arr) {	
	let j = arr.length - 1;
		
	for(let i=0; i<arr.length; i++) {
		arr1[i] = arr[j]; 
		j--;
	}
    
    return arr1;
};

let reversedArray = [1, 2, 3, 4, 5, 6, 7];
console.log(reversedArray);
console.log(reverse(reversedArray));