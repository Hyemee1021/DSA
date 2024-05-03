// You are given an array A of integers. Your task is to calculate the length of the longest possible "spike" that can be created by reordering some numbers from the array A.

// A "spike" is defined as a sequence of integers where the elements alternate between being strictly increasing and strictly decreasing. The elements chosen for the spike do not need to be contiguous in the original array A.

// Write a function longestSpike that takes in an array of integers A and returns an integer representing the length of the longest spike that can be formed.

// Input: c
// Output: 5
// Explanation: One possible spike is [2, 4, 3, 5, 1] or [1, 3, 4, 5, 2].

// Input: A = [1, 2, 3, 4, 5]
// Output: 2
// Explanation: One possible spike is [1, 3].
function longestSpike (A){

  //reorder array 
  //A=[6,5,5, 4,3,2,1,]
  A.sort((a,b) => b - a);

  //make a spike array
   const spike =[]



 

//pick the largest number-make a peak
  spike.push(A[0]);
//spike=[6]

//keep track of occurance
let occurance =0;

//iterate
  for(let i  = 1; i < A.length;i++ ){
    if(A[0] === A[i]){
      //peak has to be only one-skip
      continue
    }
    
    if((A[i] !== A[i -1] && occurance <=2) || (A[i] === A[i -1] && occurance <=2)){
      spike.push(A[i])
      
      occurance++;
  
    }else{
      //reset
      occurance =0
    }


  }
// return length of spike array
  return spike.length;
}