/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const charCount = {};
  let oddCount = 0;

  // Count the frequency of each character
  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Check how many characters have odd frequencies
  for (let count of Object.values(charCount)) {
    if (count % 2 !== 0) {
      oddCount++;
    }
  }

  // If there are no characters with odd frequencies, return the length of the input string
  if (oddCount === 0) {
    return s.length;
  }

  // Otherwise, subtract the number of odd frequencies by 1, and add 1 for the longest palindrome
  return s.length - oddCount + 1;
};
