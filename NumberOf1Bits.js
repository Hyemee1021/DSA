// /**
//  * @param {number} n
//  * @return {number}
//  */
// var hammingWeight = function (n) {
//   //integer -> binary (but its String)
//   let binary = n.toString(2);

//   let count = 0;
//   //count 1 in binary number
//   for (let char of binary) {
//     if (char === "1") {
//       count++;
//     } else {
//       continue;
//     }
//   }
//   return count;
//   //return number of 1S
// };

// console.log(hammingWeight(128));

// Test the function
console.log(hammingWeight(11)); // Output: 3
