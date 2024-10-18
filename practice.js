function myFunction(a, b) {
  // merge two arrays however, no duplicates
  const newSet = new Set([...a, ...b]);
  const newArr = [...newSet];
  return newArr.sort((a, b) => a - b);
}

console.log(myFunction([3, 4, 6], [3, 4, 5]));
