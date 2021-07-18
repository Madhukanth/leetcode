/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  let i = 0;

  let OverlappingArr = [intervals[0]];
  for (let j = 1; j < intervals.length; j++) {
    if (intervals[j][0] >= intervals[i][1]) {
      OverlappingArr.push(intervals[j]);
      i = j;
    }
  }

  return intervals.length - OverlappingArr.length;
};
