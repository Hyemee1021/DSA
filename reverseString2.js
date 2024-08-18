/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  //edge case- length is too short to reverse
  if (s.length <= 2) {
    return s;
  }
  const chunk = [];
  const double = 2 * k;
  const loop = 0;
  //let me figure out one by one
  for (let i = 0; i < s.length; i += k) {
    let part = s.slice(i, i + k);
    //I want my chunk ["ab", "cd", "ef", "g"]

    chunk.push(part);
  }
  //index 0, 2- rever order
  for (let i = 0; i < chunk.length; i++) {
    if (i % 2 === 0) {
      //"ab"-> "a" ,"b"-> "b","a"-> "ba"
      //not pushing - replace the value
      chunk[i] = chunk[i].split("").reverse().join("");
    }
  }
  return chunk.join("");
};

console.log(reverseStr("abcdefg", 2));
