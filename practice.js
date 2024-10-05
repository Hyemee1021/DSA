function myFunction(a) {
  //  a-  number-
  // to split shoudk I make number to String?
  const newStr = a.toString();
  console.log(newStr);
  const newArr = newStr.split("");
  return newArr.map((char) => Number(char));
}

console.log(myFunction(10));
