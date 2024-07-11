/**
 * @param {number[]} height
 * @return {number}
 */

//two pointer can be used in O(n^2)
var maxArea = function (height) {
  if (height.length <= 1) {
    return 0;
  }
  //height- integer arry
  //return amount of water

  let left = 0;
  let right = height.length - 1;
  let maxWater = -Infinity;
  let curentWater = 0;
  while (left <= right) {
    let index = Math.abs(left - right);
    curentWater = index * Math.min(height[left], height[right]);
    maxWater = Math.max(maxWater, curentWater);
    left++;
    right--;
  }

  return maxWater;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
