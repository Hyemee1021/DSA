var countSheep = function (num) {
  //your code here
  //when num === 3
  // return a string  "1 sheep...2 sheep...3 sheep..."
  //lets make a string
  let newStr = "";
  const length = num;

  for (let i = 1; i <= length; i++) {
    newStr += i + " sheep...";
  }
  return newStr;
  
};
console.log(countSheep(3));
