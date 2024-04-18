/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack =[]
//only stacking openning psrantheses
  const pairs ={
    "(":")",
    "[":"]",
    "{":"}"
  }
  for( let char of s){
    if(char in pairs){
stack.push(char)
    }else{
      if( stack.length ===0  || pairs[stack.pop()] !== char){
        return false
      }
    }

  }
    return stack.length === 0
};