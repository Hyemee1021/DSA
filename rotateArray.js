/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  //array is pushed to the back by k steps
  const newArray = [];
  for (let i = 1; i <= k; i++) {
    //pop from the back
    newArray.unshift(nums.pop());
  }
  for (let ele of nums) {
    newArray.push(ele);
  }
  return newArray;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
