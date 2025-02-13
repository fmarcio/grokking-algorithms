function quicksort(array) {
  const pivot = array[0];

  const lowerThanPivot = [];
  const greaterThanPivot = [];

  if (array.length <= 1) {
    return array;
  }

  // Start from index 1, as 0 is the pivot
  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      lowerThanPivot.push(array[i]);
    } else {
      greaterThanPivot.push(array[i]);
    }
  }

  return quicksort(lowerThanPivot).concat([pivot], quicksort(greaterThanPivot));
}

module.exports = quicksort;
