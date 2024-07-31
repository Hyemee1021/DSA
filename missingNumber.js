/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  //range will be [0, number]
  let number = nums.length;
  //[3,0,1]
  let total = (number * (number + 1)) / 2;

  let sumArr = nums.reduce((sum, num) => sum + num, 0);

  return total - sumArr;
};

console.log(missingNumber([3, 0, 1]));
