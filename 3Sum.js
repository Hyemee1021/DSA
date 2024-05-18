/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // Sorting the array
  nums.sort((a, b) => a - b);

  const result = [];

  for (let current = 0; current < nums.length - 2; current++) {
    // Avoid duplicates for current value
    if (current > 0 && nums[current] === nums[current - 1]) {
      continue;
    }

    let left = current + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[current] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[current], nums[left], nums[right]]);
        // Avoid duplicates for left and right pointers
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
};
