/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let start = nums[0];

  const newArr = [];
  if (nums.length === 0) {
    return newArr;
  }
  for (let i = 1; i <= nums.length; i++) {
    if (nums[i - 1] + 1 !== nums[i]) {
      //  not consequtive
      // check if it stands single or make a group
      if (start === nums[i - 1]) {
        // statnds single
        newArr.push(start.toString());
      } else {
        newArr.push(start + "->" + nums[i - 1]);
      }
      // since I push update start
      start = nums[i];
    }
  }
  return newArr;
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
