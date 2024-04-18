/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  //convert uppcase to lowercase
  //only alphanumeric
  //read the same forward and backward

  //creating two pointers- indicating indices
  let left = 0
  let right= s.length-1

  //meeting in the middle but do pass each other
  while( left < right){
    
    while( left < right && !isAlphaNumeric(s[left])){
      left++
    }

    while( right > left && !isAlphaNumeric(s[right])){
      right--
    }

    if( s[left].toLowerCase() !== s[right].toLowerCase()){
      return false
    }

    left++
    right--
  }
    return true
};

function isAlphaNumeric(char){
  return /[a-zA-Z0-9]/.test(char)

}