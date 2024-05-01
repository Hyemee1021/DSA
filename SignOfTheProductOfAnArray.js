// Problem: Sign of the Product of an Array

// You are given an array of integers nums. The sign of the product of any subset of nums is the product of all the elements' signs in the subset. Return 1 if the sign of the product of nums is positive, -1 if it is negative, and 0 if it is 0.

// Example 1:

// Input: nums = [-1,-2,-3,-4,3,2,1]
// Output: 1
// Explanation: The product of all numbers in the array is positive.

// Example 2:

// Input: nums = [1,5,0,2,-3]
// Output: 0
// Explanation: The product of all numbers in the array is 0.

// Example 3:

// Input: nums = [-1,1,-1,1,-1]
// Output: -1
// Explanation: The product of all numbers in the array is negative.

// Constraints:

// 1 <= nums.length <= 1000
// -100 <= nums[i] <= 100

function solution(A) {
  //A is integer array
  //it return either 1,0 ,1
  //when a result of multiplcation of all element is positive
  //0
  //and negative

  let result = 1;
  for (let int of A) {
    result = result * int;
  }

  if (result > 0) {
    return 1;
  } else if (result < 0) {
    return -1;
  } else {
    return 0;
  }
}
