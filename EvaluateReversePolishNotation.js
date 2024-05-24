/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  // tokens = ["2","1","+","3","*"]
  //token is String
  //put stack elements
  let stack = [];
  //[2,1]
  const operators = ["*", "+", "-", "/"];
  //-operator appears
  for (let char of tokens) {
    if (operators.includes(char)) {
      // tokens = ["2","1","+","3","*"]
      //stack =[put first, accumulate at the back]
      let a = parseInt(stack.pop()); //the last one before operator-1
      let b = parseInt(stack.pop());
      //2
      let result;

      switch (char) {
        //I want 2 + 1= b + a
        case "*":
          result = b * a;
          break;
        case "+":
          result = b + a;
          break;
        case "-":
          result = b - a;
          break;
        case "/":
          result = Math.trunc(b / a);
          break;
      }
      stack.push(result);
    } else {
      stack.push(parseInt(char));
    }
  }
  console.log(stack);
  return stack.pop();
};

console.log(evalRPN(["2", "1", "+"]));
