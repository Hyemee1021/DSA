/**
 * @param {number[]} nums
 * @return {number}
 */

//
var removeDuplicates = function (nums) {
  //nums- sorted array-non-decreasing order- 0 1 2..
  //return k- number of unique elements
  //loop through array and keep the element in container map()
  //using map() I can reach data in constant time
  let current = 0;

  while (current < nums.length) {
    if (nums[current] === nums[current + 1]) {
      nums.splice(current + 1, 1);
    } else {
      current += 1;
    }
  }
  return nums.length;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
