/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    //if there is anagram- return true

    if(s.length !== t.length){
      return false
    }
    //hash map
    const sCount={}
    const tCount={}
    const L = s.length;//there is a number

    for (let i =0; i<L; i++){
//there is no need to say L.length
      if(!sCount[s[i]]) sCount[s[i]]=0
      if(!tCount[t[i]]) tCount[t[i]]=0

      sCount[s[i]]++
      tCount[t[i]]++
    }

    for (  let char in sCount){
      if(sCount[char] !== tCount[char]){
        return false
      }
    }

    return true
};