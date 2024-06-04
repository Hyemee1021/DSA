function arrayDiff(a, b) {
//input - two rays
//output srray but a array after remove elements from b

// create set()- from array b
  const newSet = new Set(b);
  //create new array-output
  let result =[]
//loop through a check if element from a === b
  for(let ele of a){
    if( !newSet.has(ele)){
      result.push(ele)
    }

  }
//yes-> create new arary push it 
return result;
//return new array


  
}

console.log(arrayDiff([1,2,2,2,3],[2]))