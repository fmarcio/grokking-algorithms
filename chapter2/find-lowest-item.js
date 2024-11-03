function findLowestItem(array) {
  let lowest = array[0];

  array.forEach((item) => {
    if (item < lowest) {
      lowest = item;
    }
  });

  return lowest;
}

module.exports = findLowestItem;
