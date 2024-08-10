/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  //intiger to binary number
  let binaryStr1 = x.toString(2);
  let binaryStr2 = y.toString(2);
  console.log(binaryStr1, binaryStr2);

  //check length of binary
  let length1 = binaryStr1.length;
  let length2 = binaryStr2.length;
  let maxLength = Math.max(length1, length2);

  //make both length same with 0
  binaryStr1 = binaryStr1.padStart(maxLength, "0");
  binaryStr2 = binaryStr2.padStart(maxLength, "0");

  let differance = 0;
  for (let i = 0; i < maxLength; i++) {
    if (binaryStr1[i] !== binaryStr2[i]) {
      differance++;
    }
  }

  return differance;
};

console.log(hammingDistance(93, 73));
