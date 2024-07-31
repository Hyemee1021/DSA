/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  //no limitation of frequency
  //[2,3,6,7]
  //7 -2 = 5?- 2+ 3- [2,2,3]
  //7-3 = 4 -2+2=[2,2,3]
  //7-6 = 1 x
  //7-7 = 0 [7]
  //Set? or Map???
  const newMap = new Map();

  for (let i of candidates) {
    let rest = target - i;
    console.log(newMap.set(i, rest));
  }
};

console.log(combinationSum([2, 3, 6, 7], 7));
