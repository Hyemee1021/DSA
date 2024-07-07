function main(array) {
  //integer of array
  //possible of duplicates
  //return -1 if such no element
  if (array.length === 0 || array.length === 1) {
    return -1;
  }

  //remove duplicate
  //[1, 1, 1, 2, 3, 3, 4]
  let temp = array[0];

  const newArray = [];
  newArray.push(temp);

  //I put the first element
  for (let i = 1; i < array.length; i++) {
    if (temp != array[i]) {
      //not same then push to array
      newArray.push(array[i]);
      //temp becomes num
      temp = array[i];
    }
  }

  //array sorted in desending order
  newArray.sort((a, b) => b - a);
  console.log(newArray);
  return newArray[1];
}

console.log(main([1, 1, 1, 2, 3, 3, 4]));
