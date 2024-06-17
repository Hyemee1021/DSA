/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  if (nums.length === 0) return 0;

  let maxProd = nums[0];
  let minProd = nums[0];
  let maxProductSoFar = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];
    let tempMax = Math.max(num, maxProd * num, minProd * num);
    minProd = Math.min(num, maxProd * num, minProd * num);
    maxProd = tempMax;

    maxProductSoFar = Math.max(maxProductSoFar, maxProd);
  }

  return maxProductSoFar;
};
