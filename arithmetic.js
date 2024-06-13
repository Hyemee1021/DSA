function arithmetic(a, b, operator) {
  //a, b, -integer

  //operator - string
  //return integer

  //Try to do it without using if statements!

  switch (operator) {
    case "add":
      return a + b;

    case "subtract":
      return a - b;

    case "multiply":
      return a * b;

    case "divide":
      return a / b;
  }
}

// console.log(arithmetic(1, 2, "add")); // Output: 3
console.log(arithmetic(10, 5, "subtract")); // Output: 5
console.log(arithmetic(3, 4, "multiply")); // Output: 12
console.log(arithmetic(20, 4, "divide"));
