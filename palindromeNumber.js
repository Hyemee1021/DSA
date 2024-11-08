/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // x is number -> sting
  const string = x.toString();
  let left = 0;
  let right = string.length - 1;

  while (left <= right) {
    if (string[left] !== string[right]) {
      return false;
    }
    left += 1;
    right -= 1;
  }
  return true;
};

console.log(isPalindrome(123));
