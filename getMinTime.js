function getMinTime(task_memory, task_type, max_memory) {
  //task_memory-array of integer-each
  //task_type-array of integer-each
  //max_memory-integer-total time of all processes
  //when type is the same thwy can proceed together-but they should be within max_memory
  //lets check if there are the same type
  //I want type : memory
  const container = {};

  for (let i = 0; i < task_type.length; i++) {
    const type = task_type[i]; //integer
    const memory = task_memory[i]; //integer
    if (container.hasOwnProperty(type)) {
      //yes? check max_memory
      container[type] += memory;
      //if they are within amx_memory do  nothing
    } else {
      container[type] = memory;
    }
  }
  return countUnit(container, max_memory);
  //return minimum time required to process all task-how many unit
}

console.log(getMinTime([7, 2, 3, 9], [1, 2, 1, 3], 10));

function countUnit(obj, max_memory) {
  //loop obj>
  let unit = 0;
  for (let key in obj) {
    if (obj[key] > max_memory) {
      unit++;
    }
  }
  const length = Object.keys(obj).length;
  return (unit += length);
}
