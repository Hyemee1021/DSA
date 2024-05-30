function sortArray(array) {
  //array of number
  //even numbers stay their position
  //odd number sorted by in asending order

  // let's keep odd number only
  const newArray = [];
  //loop through element check even?? odd??
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      continue;
    } else {
      newArray.push(array[i]);
    }
  }
  newArray.sort((a, b) => a - b);

  const newArray2 = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      //I find odd number <-push small odd number
      array[i] = newArray.shift();
    }
  }

  return array;
  //[3,5]
  //since newArray is in acsending order- when ever I meet odd number i put odd

  // Return a sorted array.
}
console.log(sortArray([5, 8, 6, 3, 4]));
