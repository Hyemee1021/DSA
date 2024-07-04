/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  let maxSum = nums[0]; // Initialize maxSum with the first element
  let currentSum = nums[0]; // Initialize currentSum with the first element

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]); // Decide whether to start a new subarray or continue the existing one
    maxSum = Math.max(maxSum, currentSum); // Update the maximum sum found so far
  }

  return maxSum;
}

// Example usage:
let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums)); // Output: 6
