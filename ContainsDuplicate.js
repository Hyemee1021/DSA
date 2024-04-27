/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  //container to put elements
  const newSet = new Set();

  for(let i =0; i < nums.length; i++){
   if( newSet.has(nums[i])){
       return true
   }else{
 newSet.add(nums[i]);
   }
 
  }

return false
};