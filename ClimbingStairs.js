/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  //recursion and memorizaion
  // Each time you can either climb 1 or 2 steps.
  let memo = {};

  function climb(n) {
    if (n <= 2) {
      //1 or 2 steps- only one or two ways
      return n;
    }

    if (memo[n]) {
      //if n steps in memo
      return memo[n];
    }

    memo[n] = climb(n - 1) + climb(n - 2);
    //in order to get answer of n - I need two previous values
    return memo[n];
  }
  return climb(n);
};
