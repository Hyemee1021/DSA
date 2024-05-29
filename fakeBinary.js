function fakeBin(x) {
  //x is a string of number
  //under 5-> 0
  //I change to x -> array
  const newArray = x.split("");
  //newArray is an array with numbers
  // i will use a filter()->
  let numberArray = newArray.map((str) => {
    //str-> num
    return parseInt(str);
  });

  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] >= 5) {
      continue;
    } else {
      numberArray[i] = 0;
    }
  }

  //return a replaced string

  return numberArray.join("");
}

console.log(fakeBin("45385593107843568"));
