/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  //converting uppcase -> lowercase
  //removing all on-alphanumeric

  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  console.log(s);

  let left = 0;
  let right = s.length - 1;

  while (left <= right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  //return true/false
  return true;
};

console.log(isPalindrome("A man, *a plan,! a canal: Panama"));
