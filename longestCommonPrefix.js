function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";

  // Initialize the prefix as the first string
  let prefix = strs[0];
  //flower
  // Compare prefix with each string
  for (let i = 1; i < strs.length; i++) {
    //learn indexOf()
    while (strs[i].indexOf(prefix) !== 0) {
      //if strs[i] doesnt start with prefix
      // Reduce the prefix until it matches
      prefix = prefix.substring(0, prefix.length - 1);
      //prefix becomes shorter by one character
      //until strs[i].indexOf(prefix) === 0
      //learn substring()
      if (prefix === "") return "";
    }
  }

  return prefix;
}
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
