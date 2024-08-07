/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  //s, t - string
  if (s.length !== t.length) {
    return false;
  }
  const newMap = new Map();
  for (let char of s) {
    //set? or map?
    //a :2,<- i would like to store
    if (newMap.has(char)) {
      newMap.set(char, newMap(char) + 1);
    } else {
      newMap.set(char, 1);
    }
  }

  for (let char of t) {
    //a :2,<- i would like to store
    if (newMap.has(char)) {
      newMap.set(char, newMap(char) - 1);
    } else {
      return false;
    }

    if (newMap.get(char) < 0) {
      return false;
    }
  }

  // Check that all values in the map are zero
  for (let value of newMap.values()) {
    if (value !== 0) {
      return false;
    }
  }
  //return boolean
  return true;
};

console.log(isAnagram("ab", "a"));
