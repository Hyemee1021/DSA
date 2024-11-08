/**
 * @param {number} n
 * @return {number}
 *
 * f(3) = F(2) + F(1)
 *
 */
const fib = (n) => {
  // basecase- when to stop

  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  //recursive - call by itslef
  return fib(n - 1) + fib(n - 2);
};

console.log(fib(3));
