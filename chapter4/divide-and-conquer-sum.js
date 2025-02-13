function sumArrayElements(array) {
  let total;

  if (!array.length) {
    total = 0;
  } else {
    total = array[0] + sumArrayElements(array.slice(1));
  }

  return total;
}

module.exports = sumArrayElements;
