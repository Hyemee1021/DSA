// function solution(S) {
//   let integer = parseInt(S, 2);
//   let result;
//   let number = 0;
//   //while result becomes 0
//   while (result !== 0) {
//     if (integer % 2) {
//       result = integer / 2;
//     } else {
//       result = integer - 1;
//     }
//     //any way counts go up
//     //either it is even or not
//     number += 1;
//   }
//   return number;
// }
// console.log(solution("111"));

// 1 Understand problem: understand input and output, in relation to problem description
// 2 Create test cases or examples of input/output:
// observer any patterns to find algorithm or break down into further steps
// 3 Create comments of the logical steps, observations, edge cases
// 4 Observe time complexity
// 5 Implement the solution
// 6 Test solution
// 7 Optimise
// A is an array- N-length of integer
//spike??
// function solution(A) {
//   //return length of element of longest possible spike

//   if (A.length === 1) {
//     return 1;
//   }
//   const newArr = A.sort((a, b) => a - b);

//   let curNum = A[0];

//   const spike = [];
//   for (let i = 1; i < newArr.length; i++) {
//     if (curNum < A[i]) {
//       spike.push(curNum);
//       curNum = A[i];
//     }
//   }
// }
function solution(S) {
  //data type of input
  //S-representing binary num
  //V- int of binary
  //operations-V to 0

  //Q?? what operations??
  //1.v is odd- substract -1
  //2.v is even divide by 2

  //count the operation
  //return type Int - number of operations

  //S= '111'String -> int using parseInt(S, 2);
  let number = parseInt(S, 2);
  console.log(number);

  //number is 7 now

  //7 -> 0 by using 2 operations
  //count - number of operations

  //7 odd - -1 === 6, 1
  //operation(number % 2 !== 0){ number - 1 I need to save new value to number }  , I count operations -> count++
  //6 even /2 === 3 , 2
  //else{ number / 2} , count++
  //3 odd -1 === 2, 3
  //2 even /2 === 1, 4
  //1 odd -1 === 0, 5

  //count 5
  //return count
  let count = 0;
  //number === 7
  //I neeed to stop looping 0
  while (number > 0) {
    //operations
    if (number % 2 === 0) {
      //even operation & update my number variable
      number = number / 2;
    } else {
      //odd opertion
      number = number - 1;
    }
    //update count variable
    count++;
  }

  //when number === 0
  return count;
}
console.log(solution("111"));
