function squareDigits(num) {
  //input integer-765
  //7*7-49 6*6 36 5*5 25-> return 493625
  //integer -> array
  let newArray = Array.from(String(num), Number);
  console.log(newArray);
  //eash element-to 2 square-loop
  newArray = newArray.map((ele) => ele * ele);

  //join -> return integer
  return Number(newArray.join(""));
}
console.log(squareDigits(765));
