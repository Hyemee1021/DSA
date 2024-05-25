function solution(S) {
  //S is a string with charector N
  //S ="011100"
  //I need to return 7
  //7 is a number of operation 28 becomes 0

  //I count operation
  let operation = 0;

  //let's make a string to number
  let newNum = Number(S);
  //make it to decimal
  newNum = parseInt(newNum, 2);

  //I need to make newNum to 0-lets loop through
  //28- newNum
  console.log(newNum);
  while (newNum > 0) {
    //true
    if (newNum % 2 === 0) {
      //if newNum is even
      //I need to update the newNum
      newNum = newNum / 2;
      operation++;
    } else {
      //when newNum is odd
      newNum = newNum - 1;
      operation++;
    }
  }
  console.log(operation);
  return operation;
}

console.log(solution("011100"));
