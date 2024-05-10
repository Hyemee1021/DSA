/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // input : a string
  //a substring, a subsequence are different
  //since I cant repeat characters
  //make a substring and store and chack if I encounter the smae

  let maxStringLength = 0;
  let curString = "";
  //looping array
  for (let i = 0; i < s.length; i++) {
    const index = curString.indexOf(s[i]);
    if (index !== -1) {
      // If the character is found, reset the current substring to start from the next character after the repeated character
      curString = curString.substring(index + 1);
    }

    curString += s[i];

    maxStringLength = Math.max(maxStringLength, curString.length);
  }
  return maxStringLength;
};
