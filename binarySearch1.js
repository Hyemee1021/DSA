function solution(shelves, itemNo){
  //shelves- 2d- array-> to make one array
  //find the item in shelves

  //for- shelve.length- middle nested array- get access to it- search- k*-log(n)- 
  //> to make one array- loop through the array -> push to new one-
  const newArr =[]

  for( let arr of shelves){
    for( let num of arr ){
        newArr.push(num)
    }
  }

  // start, end varialbe-indices of newArr
  let start = 0;
  let end = newArr.length -1;
  //mid- middle point-compare with itemNo
 
let mid = start + Math.floor( ( end- start)/2)
//[ 1, 3, 5, 6, 7, 9 ]
while( start <= end ){
  console.log( start +","+ end)
    //mid- middle point-compare with itemNo
  let mid = start + Math.floor( ( end- start)/2)
  console.log(mid)
  if( newArr[mid] === itemNo){
    return true
  }else if(itemNo < newArr[mid] ){
    end = mid - 1
  }else{
    start = mid + 1
  }
}
  //mid< target - end = mid -1;
  //mid> target - start = mid + 1

//return Boolean
return false
}

//[ 1, 3, 5, 6, 7, 9 ]- 0 + 5 = 
console.log(solution([[1,3,5],[6,7,9]], 3 ))