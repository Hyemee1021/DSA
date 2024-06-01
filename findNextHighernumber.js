function solution(int) {
  //input-integer
  //lets change int -> binary
  let binary = parseInt(int.toString(2));
  console.log(binary);
  console.log(typeof binary);
  //I need to plus one to the binary
  const number1 = 1;

  let binary1 = parseInt(number1.toString(2));
  console.log(binary1);
  console.log(typeof binary1);

  let result = binary + binary1;
  console.log(result);
  return parseInt(result.toString(2));

  //then +1 binary
  //return output - binary, and next higher  number
}
console.log(solution(129));
