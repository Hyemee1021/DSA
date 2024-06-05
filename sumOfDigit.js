function digitalRoot(n) {
  // input -integer-   942
  //plus all the digit -> one digit
  //9 +4 +2 = 15=> 1+5=> 6
  //output-> integer of one digit
  return sum(n);
  //return 6
}

function sum(n) {
  // 942 -> str
  let newStr = String(n);
  // let str = num + "";

  const length = newStr.length;

  //one digit =- stop return
  if (length < 2) {
    //still string

    return n; //return number
  } else {
    //this number is more than 2 digits
    //make num -> str
    let num1 = 0;
    //str - loop and make a sum
    for (let ele of newStr) {
      //make a number again
      num1 += Number(ele);
    }
    return sum(num1);
  }

  //num -> str???str.length < 2 return number

  //"942"->

  //str.length>=2

  //9 + 4+ 2
  //str[0 ]-> num1 str[1] -> num2 -> num1+ num2=> result
  //"942"
  //result-call sum(result)
}

console.log(sum(942));
console.log(digitalRoot(25));
