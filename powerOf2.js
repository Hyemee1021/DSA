// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]

function powersOfTwo(n) {
  //integer-input
  // n = 0  ==> [1]        # [2^0]
  // n = 1  ==> [1, 2]     # [2^0, 2^1]
  // n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
  const length = n;

  let outputArry = [];
  for (let i = 0; i <= length; i++) {
    outputArry.push(Math.pow(2, i));
  }
  //return array of number after power of 2 from 0....
  return outputArry;
}

console.log(powersOfTwo(2));
