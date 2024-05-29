function abbrevName(name) {
  // code away
  //"Sam Harris"->"Sam" "Harris"-> "S" "H"-> "S.H"

  //string split to array
  const TwoWords = name.split(" ");
  //accumulate here
  const newArray = [];
  //using map()-looping array
  TwoWords.map((word) => {
    //getting first letter
    newArray.push(word[0].toUpperCase());
  });
  //join array to string
  return newArray.join(".");
}

console.log(abbrevName("sam harris"));
