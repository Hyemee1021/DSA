function GeometricSequenceSum(a, r, n) {
  //getting sun of geometric
  //to get next term-* by current term
  //a?-starting bumber
  //r?-number multiple
  //n?-total number of element
  const newArray = [];
  newArray.push(a);
  let current = 0; //<- index
  //a becomes newArray[0]
  for (let i = 1; i < n; i++) {
    newArray.push(newArray[current] * r);
    //put result to array after multiple
    //move to next index
    current++;
  }

  const sum = newArray.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  //return sum
  return sum;
}

console.log(GeometricSequenceSum(2, 3, 5));
//2, 6, 18, 54, 162,-> 242
