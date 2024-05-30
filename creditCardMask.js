// return masked string
function maskify(cc) {
  //input string  "1235555" or "char"

  //   "1235555"->"#####5616"
  //array???[ "1",2,3,5555]->
  let newArray = cc.split("");

  //   "Skippy" --> "##ippy"
  // /[ 'S', 'k', 'i', 'p', 'p', 'y' ]
  const lastdigits = newArray.length - 4;
  //["s","k"...]-> array[0]=ok
  for (let i = 0; i < newArray.length; i++) {
    //loop set the range  < newArr.lenghth -4
    if (i < lastdigits) {
      newArray[i] = "#";
    } else {
      continue;
    }
  }
  ["#", "#", "i", "p", "p", "y"];

  console.log(newArray);

  //array[i] =# change before last four digit

  //return masked string -leave last four digit
  //   [ #,#,#,1,2,3,4] -> string join("")
  return newArray.join("");
}

console.log(maskify("Skippy"));
console.log(maskify("64607935616"));
