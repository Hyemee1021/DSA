/**
 * Finds the longest palindromic substring using dynamic programming
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
  const n = s.length;
  if (n === 0) return "";

  // Table to store results of subproblems
  let dp = Array.from(Array(n), () => Array(n).fill(false));
  let start = 0;
  let maxLength = 1;

  // All substrings of length 1 are palindromes
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }

  // Check substrings of length 2
  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      start = i;
      maxLength = 2;
    }
  }

  // Check substrings of length > 2
  for (let length = 3; length <= n; length++) {
    for (let i = 0; i < n - length + 1; i++) {
      let j = i + length - 1;
      if (s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true;
        start = i;
        maxLength = length;
      }
    }
  }

  return s.slice(start, start + maxLength);
}

// Test case
console.log(longestPalindrome("babad")); // Output: "bab" or "aba"
