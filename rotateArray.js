/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length;
  //in case if k is bigger than nums.length

  //splice elements I need to put front
  nums.unshift(...nums.splice(nums.length - k));
  //directly changes the content of original array
  console.log(nums);
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
