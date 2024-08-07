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
  let maxWater = 0;

  while (left <= right) {
    let index = Math.abs(left - right);
    console.log("index" + index);

    let curentWater = index * Math.min(height[left], height[right]);
    maxWater = Math.max(maxWater, curentWater);
    console.log("maxWater" + maxWater);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
