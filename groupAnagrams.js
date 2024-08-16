// Example map
const map = new Map();
map.set("aet", ["eat", "tea", "ate"]);
map.set("ant", ["tan", "nat"]);
map.set("abt", ["bat"]);

// Convert map values to an array of arrays
const result = Array.from(map.values());
console.log(result); // Output: [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]

var groupAnagrams = function (strs) {
  const map = new Map();

  // Helper function to sort characters in a string
  function sortString(str) {
    return str.split("").sort().join("");
  }

  for (let str of strs) {
    const key = sortString(str);
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(str);
  }

  // Convert map values to an array of arrays
  return Array.from(map.values());
};

// Example usage
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
