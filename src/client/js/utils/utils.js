// Gets the row number of an item
export const getRowNo = (noOfRows, itemIndex) =>
  Math.floor(itemIndex / noOfRows)

// Gets the column number of an item 
export const getColNo = (noOfCols, elIndex) => 
  elIndex % noOfCols

// creates a new array with incremental numbers eg [1, 2, 3, 4]
export const incrementalArray = (length) => {
	const array = []
	for (var i=0; i < length; i++) {
  		array.push(i + 1);
  	}
  	return array;
}

/**
* Shuffles items in a given array, using Fisher-Yates shuffle algorithm 
*
* See https://stackoverflow.com/a/6274381/1909499
*/
export const shuffleArray = (arr) => {
	const array = arr;
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
