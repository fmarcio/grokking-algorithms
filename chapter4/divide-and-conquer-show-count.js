function showItemsCount(array) {
  if (!array.length) {
    return 0;
  } else {
    return 1 + showItemsCount(array.slice(1));
  }
}

module.exports = showItemsCount;
