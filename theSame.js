function comp(array1, array2) {
  //if one of them is null is false???
  if (array1 === null || array2 === null) {
    return false;
  }
  //is array2 square of array1's element

  //make newSet full with array1's elements of square
  const newSet = new Set();
  for (let num of array1) {
    newSet.add(Math.pow(num, 2));
  }

  for (let num of array2) {
    if (!newSet.has(num)) {
      return false;
    }
  }
  return true;
  //return truw or false
}

console.log(
  comp(
    [6, 1, 8, 5, 7, 3, 8, 8, 0, 0, 5, 1, 3, 5, 8],
    [1, 64, 25, 0, 9, 64, 64, 1, 25, 9, 49, 64, 36, 1, 25]
  )
);
