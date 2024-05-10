/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

    //return three elements makes 0
    //can return 2d array 

    //lets track sum 
    let sum =0
    //[-1 0 1 2 -1 -4]
    //[-1 -1 0 1 2 5]
    let result =[]
    //when sum + nums[i] === 0 
    for(let i =0; i < nums.length; i++){
      sum += nums[i]
      //-1 + 0 + 1

      //make distinct array
      
      result.push(nums[i])

      if( sum += nums[i] === 0){
   //sum becomes 0 again
        sum =0
        return result;

      }
    }
 
};