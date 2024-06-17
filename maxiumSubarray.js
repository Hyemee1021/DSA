/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let cur_sum = 0;
  let max_sum = -Infinity;

  for (let num of nums) {
    cur_sum = Math.max(num, cur_sum + num);

    max_sum = Math.max(cur_sum, max_sum);
  }
  return max_sum;
};
console.log(maxSubArray([2, -3, 5, -1, 8, -7]));
