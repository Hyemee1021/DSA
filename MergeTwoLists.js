/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  //lets sort
  intervals.sort((a, b) => a[0] - b[0]);
  //merge array
  const merge = [];

  //let loop the intervals
  for (let interval of intervals) {
    if (merge.length === 0 || merge[merge.length - 1][1] < interval[0]) {
      merge.push(interval);
    } else {
      //they ae overlapped
      //     [1,4]  [2,6]-  [1, 6]
      merge[merge.length - 1][1] = Math.max(
        merge[merge.length - 1][1],
        interval[1]
      );
    }
  }

  return merge;
};

console.log(
  merge([
    [1, 4],
    [2, 6],
    [8, 10],
  ])
);
