function myFunction(arr) {
  //  array of object
  // sort in array
  // const newArr = [3,2,1]-> newArr.sort((a,b) => a- b)
  // can I do this?
  return arr.sort((obj1, obj2) => obj1.b - obj2.b);
}

console.log(
  myFunction([
    { a: 1, b: 2 },
    { a: 5, b: 4 },
  ])
);
