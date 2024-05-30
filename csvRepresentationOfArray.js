function toCsvText(array) {
  // input- 2d array
  let newArray = [];
  let newStr = "";
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i].join(","));
    //enter subarray makes string
  }

  newStr += newArray.join("\n");
  return newStr;
  ;
  //return string
  //   "0,1,2,3,4\n" + "10,11,12,13,14\n" + "20,21,22,23,24\n" + "30,31,32,33,34";
}
console.log(
  toCsvText([
    [0, 1, 2, 3, 4],
    [10, 11, 12, 13, 14],
    [20, 21, 22, 23, 24],
    [30, 31, 32, 33, 34],
  ])
);
