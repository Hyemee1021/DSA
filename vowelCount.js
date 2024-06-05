function getCount(str) {
  //input-str only low case
  //"qwert"-loop though count vowel
  //I just need to check if str has vowels
  const newSet = new Set(["a", "e", "u", "i", "o"]);
  //count vowels
  let result = 0;
  for (let char of str) {
    if (newSet.has(char)) {
      result++;
    }
  }
  //output- number of vowels-number
  return result;
}

console.log(getCount("qwerteee"));
