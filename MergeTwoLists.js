/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length === 0) return [];

  intervals.sort((a, b) => a[0] - b[0]);

  let prev = intervals[0];
  let merge = [];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= prev[1]) {
      prev[1] = Math.max(intervals[i][1], prev[1]);
    } else {
      merge.push(prev);
      prev = intervals[i];
    }
  }

  // Don't forget to add the last interval
  merge.push(prev);
  return merge;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
