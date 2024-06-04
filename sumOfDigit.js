function digitalRoot(n) {
  // input -integer-   942
  //plus all the digit -> one digit
  //9 +4 +2 = 15=> 1+5=> 6
  //output-> integer of one digit
  //return 6
}


function sum(n){
  // 942 -> str
  let newStr = "";
  newStr = String(n);
  
  const length = newStr.length;

    //one digit =- stop return
  if(length < 2 ){
    //still string
    return n    //return number
  }
 
  //num -> str???str.length < 2 return number

//"942"-> 
 
  //str.length>=2

  //9 + 4+ 2
//str[0 ]-> num1 str[1] -> num2 -> num1+ num2=> result
//"942"
//result-call sum(result)

}
https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript
console.log(sum(9))