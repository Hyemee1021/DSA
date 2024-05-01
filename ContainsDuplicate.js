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

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const set = new Set();
  for (let num of nums){
      if(set.has(num)) {
          return true;
      } else {
          set.add(num);
      }
  }
  return false; // No duplicates found
};
