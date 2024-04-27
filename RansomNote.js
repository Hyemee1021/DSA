var canConstruct = function (ransomNote, magazine) {
  const charCounts = {}; // Object to store character counts

  // Populate charCounts with characters from magazine
  for (let char of magazine) {
    charCounts[char] = (charCounts[char] || 0) + 1;
    // charCounts[char] = (charCounts[char] || 0) + 1;
    //                     number return
  }

  // Iterate through ransomNote and decrement charCounts
  for (let char of ransomNote) {
    if (!charCounts[char]) {
      // If the character is not present in magazine or its count becomes 0
      return false;
    }
    charCounts[char]--; // Decrement the count
  }

  // If we reach here, ransomNote can be constructed
  return true;
};
