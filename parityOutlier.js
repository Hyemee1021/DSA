function findOutlier(integers) {
  //array of integer -from length of three til very large-
  //[2, 4, 0, 100, 4, 11, 2602, 36]
  //array can be filled with even or odd numbers
  //outlier is only one...
  //I will count even and odd number - and return a number is one!!
  let odd = [];
  let even = [];
  for (let num of integers) {
    if (num % 2 === 0) {
      even.push(num);
    } else {
      odd.push(num);
    }
  }

  if (odd.length === 1) {
    return odd[0];
  } else if (even.length === 1) {
    return even[0];
  }
  //return outlier-integer
}
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
