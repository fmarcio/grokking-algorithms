function decrease(number) {
  console.log(number);

  if (number <= 0) {
    return "Done! Base case is reached.";
  }

  return decrease(number - 1);
}

module.exports = decrease;
