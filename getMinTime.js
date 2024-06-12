function getMinTime(task_memory, task_type, max_memory) {
  //task_memory-array of integer-each
  //task_type-array of integer-each
  //max_memory-integer-total time of all processes
  //when type is the same thwy can proceed together-but they should be within max_memory

  
 

//[7, 2, 4, 9], [1, 2, 1, 3]
   //obj type:[memories]
   const container ={}

 //(in!!!)
  //lets check if there are the same type
   for( let i =0 ; i< task_type.length; i++){
    if(!container[task_type[i]]){
      container[task_type[i]]= [task_memory[i]];
     // 1: [7]
    }else{
      container[task_type[i]].push(task_memory[i]);
    }

   }
   console.log(container)
  //loop task_type
  //no- i put type -> obj type: memory
//yes-i put them in container(obj) in array

   

    //container={
      //
     // 1:[7,4], 
    //  2:[1]
    //  3:[9]
  //  }
    //container ex> 1:[1,2,3,4,5]//memories in array
    //iterate only values in obj
    //loop- for( const row of Object.values(container))
      let result = 0
      for(const row of Object.values(container)){
        const sorted = row.sort((a,b)=> a-b)
        result += countUnit(sorted, max_memory)

      }
    //loop- for( const row of Object.keys(container))
    //loop- for( const row of Object.entries(container))
      //use two pointer-{


// counting units!
//unit variable- to keep track of numbers of unit
    //value =[1,2,3,]
    //variable= left, right-inddexs
    //left = row[0]
    //right =row.length
    //while( left < right){
      //when they meet in the middle the loop needs to stop
      //left++ -1
      
  //if row[left ] + row[right]<= mex memory
  //yes - i count unit++-then I move left++ , right--
  //no- I move //right--
  //out side of while loop
//left overs- tasks...
//when there is no pair-

//row.length - (unit * 2)= leftover-2-result global varialable-i keep this during obj loop
//return - result
return result;
    
      }
  
  //return minimum time required to process all task-how many unit


console.log(getMinTime([10, 2, 7, 9, 3], [1, 2, 1, 3, 1], 10));
//[10, 7, 3]-2

//helper- take a row - return -units of each row
//later i need to accumulate all of them and return
function countUnit(row , max_memory){
  let left = 0
  let right = row.length-1;

  let unit =0;
  let leftEle =0;

  while( left < right){
    if( row[left] + row[right] <= max_memory){
      unit++;
      left++;
      right--;
    }else{
      right--
    }
  }
  
  leftEle = row.length - (unit * 2) ;
  return leftEle + unit

}