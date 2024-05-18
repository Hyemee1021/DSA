/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (numbers, target) {
//   const newArr = new Map();

//   for (let i = 0; i < numbers.length; i++) {
//     //[2 7 11 15] target =9

//     let rest = target - numbers[i];
//     //7 = 9 - 2
//     //2 = 9-7
//     if (newArr.has(rest)) {
//       //i need to return indices
//       return [newArr.get(rest), i + 1];
//     } else {
//       //newArr
//       //key: value
//       //2: 1
//       newArr.set(numbers[i], i + 1);
//     }
//   }
// };

var twoSum = function (numbers, target){
  //target = 9
  let left= 0
  const length = numbers.length-1
  let right = length
  //when left+ right > target
  while( left < right){
    let sum = numbers[left] + numbers[right]
    if( sum === target){
      return [ left+1, right+1]

    }

      if( sum > target){
        right--;

      }else{
        left++;
      }

  }
  // I move left pointer to right
  //[1,3,4,5,7,11]** sorted in ascending order
  // left  = 1, right = 11 1 + 11 = 12
  //12> target(9)
  // I want to make sum smaller so I move 11 -> 7
  // left (1 )+ right(7)< target(9)
  // I want the sum bigger so I move 1=>3
  return [ left +1, right +1]
}

twoSum([2,7,11,15], 9)