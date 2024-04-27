/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // Convert array of digits to a string
  let newStr = "";
  for (let i = 0; i < digits.length; i++) {
    newStr += digits[i].toString();
  }

  // Convert the string to a BigInt and increment by 1
  let newNum = BigInt(newStr);
  newNum++;

  // Convert the incremented number back to a string and then to an array of digits
  let newStr2 = `${newNum}`;
  return newStr2.split("").map((char) => {
    return parseInt(char);
  });
};

// Example usage:
const digits = [1, 2, 3];
console.log(plusOne(digits)); // Output: [1, 2, 4]

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  //large integer

  //increment by 1

  //[1,2,3] =>123 =>//increment by 1, 124 => [1,2,4]

  //[9]=>9 +1=> 10 => [1,0]

  //creat varialbe- to store String later it becomes number
  let int = "";
  //1. take array and make it to integer
  for (let i = 0; i < digits.length; i++) {
    //put values next to each other...

    //change number to String
    let number = digits[i].toString();

    //put String variable+= number.toString()
    int += number;
  }
  //change String(int) => Number(newN)

  let newN = BigInt(int);

  //2. integer increse by 1

  newN++;

  //3. make Number to String Array=> number Array
  return newN
    .toString()
    .split("")
    .map((char) => {
      //4. return the Array
      return BigInt(char);
    });

  //asd=> "1","2","3" array)=> 1, 2, 3
};
