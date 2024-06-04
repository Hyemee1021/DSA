var uniqueInOrder = function (iterable) {
  //input can string ->return [string]
  let newArray = iterable.split("");

  //I need to keep tract of two elements
  let current = 0;

  let result = [];
  result.push(newArray[current]);
  //first, I put the first elememnt

  for (let i = 1; i < newArray.length; i++) {
    if (newArray[current] === newArray[i]) {
      continue;
    } else {
      result.push(newArray[i]);
    }
    //current goes up no matter of any of results
    current++;
  }
  return result;
};

console.log(uniqueInOrder("AABBCCBB"));
