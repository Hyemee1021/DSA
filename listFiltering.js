function filter_list(l) {
  //input- array of different elements
  // loop through the array to sort out only number
  let numberArray = [];
  numberArray = l.filter((ele) => typeof ele === "number");

  return numberArray;

  //output - new array of only number from input
}
console.log(filter_list([1, 2, "a", "b"]));
