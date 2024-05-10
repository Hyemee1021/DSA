// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target) {
//   for( let i = 0; i < nums.length; i++){

//     for( let j= i+1; j < nums.length; j++){
//      if( nums[i]+ nums[j] === target){
//       return [i, j]
//      }
//     }
//   }
    
// };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  //make a container
  const map = new Map()
 // map={
//  2:0,
//  1:1
 // 5:2
  //}
 // val: index
  //[2,1,5,3]
  //loot through nums
  for(let i =0; i< nums.length; i++){
       const rest = target - nums[i]
       //1 = 4-3
       if(map.has(rest)){
          return [ map.get(rest), i]
          //1, 3
       }else{

          map.set(nums[i],i)
       }

      
       }


  }
  