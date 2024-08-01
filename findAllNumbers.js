/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const numbers = nums.length;
  //[4,3,2,7,8,2,3,1]-8
  //range [1,8]()
  const newSet = new Set();
  for (let i = 1; i <= numbers; i++) {
    newSet.add(i);
  }

  for (let num of nums) {
    newSet.delete(num);
  }
  console.log(newSet);

  const result = Array.from(newSet);
  return result;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
