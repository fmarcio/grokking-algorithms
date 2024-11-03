// binary search only works if the algorithm is sorted

function binarySearch(arr, targetItem) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middlePosition = Math.floor((start + end) / 2);

    // Search is done. Return targetItem position
    if (arr[middlePosition] === targetItem) {
      return `Target item is in the index ${middlePosition} of the array`;

      // Target is on right side of middle. Discard array inferior (left) part.
    } else if (arr[middlePosition] < targetItem) {
      start = middlePosition + 1;

      // Target is on left side of middle. Discard array superior (right) part.
    } else {
      end = middlePosition - 1;
    }
  }

  // Element not found in the array
  return `Index is -1. Target item is not present in the array`;
}

module.exports = binarySearch;
