const findLowestItem = require("./find-lowest-item");

// sort array without using .sort()

function sortArray(array) {
  let newArr = [];

  while (array.length > 0) {
    const lowest = findLowestItem(array);
    newArr.push(lowest);

    // remove lowestItem from original array
    const indexLowest = array.indexOf(lowest);
    array.splice(indexLowest, 1);
  }

  return newArr;
}

module.exports = sortArray;
