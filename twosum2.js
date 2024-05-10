/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  const newArr = new Map();

  for (let i = 0; i < numbers.length; i++) {
    //[2 7 11 15] target =9

    let rest = target - numbers[i];
    //7 = 9 - 2
    //2 = 9-7
    if (newArr.has(rest)) {
      //i need to return indices
      return [newArr.get(rest), i + 1];
    } else {
      //newArr
      //key: value
      //2: 1
      newArr.set(numbers[i], i + 1);
    }
  }
};
