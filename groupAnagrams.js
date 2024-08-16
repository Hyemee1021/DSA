// Example map
// const map = new Map();
// map.set("aet", ["eat", "tea", "ate"]);
// map.set("ant", ["tan", "nat"]);
// map.set("abt", ["bat"]);

// // Convert map values to an array of arrays
// const result = Array.from(map.values());
// console.log(result);
// Output: [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]

var groupAnagrams = function (strs) {
  //edge case
  if (strs.length <= 1) {
    return [strs];
  }

  const newMap = new Map();

  //methods- has(), set(), get()

  for (let str of strs) {
    //"eat"=> "e","a","t"=> sort =>"a", "e","t"=> "aet"
    const sorted = str.split("").sort().join();

    if (!newMap.has(sorted)) {
      //set the sorted as key and value type as empty array
      newMap.set(sorted, []);
    }
    //push to value- push original word(str)
    //like this I can put first value- i set the key and put the value as well
    newMap.get(sorted).push(str);
  }

  //return 2-d array - only [[values], []]
  return Array.from(newMap.values());
};

// Example usage
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
