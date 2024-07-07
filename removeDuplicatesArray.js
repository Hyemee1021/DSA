/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  //nums- sorted
  if (nums.length === 0) {
    return 0;
  }
  //cant make a new array
  let j = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[j] !== nums[i]) {
      //this mean unique
      j++;
      nums[j] = nums[i];
      console.log(j);
    }
  }
  console.log(nums);
  console.log(j);
  return j + 1;
};

console.log(removeDuplicates([1, 1, 2]));
