/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSub = nums[0];
  let curSum = nums[0];

  //elements can be negative numbers
  for (let i = 1; i < nums.length; i++) {
    // Choose between extending the current subarray or starting a new subarray.. reset?? or keeping adding?
    //I need to get more not less

    curSum = Math.max(nums[i], curSum + nums[i]);
    // Update the maximum subarray sum found so far
    maxSub = Math.max(maxSub, curSum);
  }

  return maxSub;
};
