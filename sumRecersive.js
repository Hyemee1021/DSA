const sumNumbersRecursive = (numbers) => {
  //numbers-array
  //basd case
  if (numbers.length === 0) {
    return 0;
  }

  return numbers[0] + sumNumbersRecursive(numbers.slice(1));
  //return sum-number
};

module.exports = {
  sumNumbersRecursive,
};
console.log(sumNumbersRecursive([1, -1, 1, -1, 1, -1, 1])); // -> 26
