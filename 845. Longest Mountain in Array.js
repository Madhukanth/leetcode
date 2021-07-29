/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function (a) {
  let longestMountainLength = 0;
  let mountainFrom = a.length;

  for (let i = 1; i < a.length; ++i) {
    const beforePrevious = i >= 2 ? a[i - 2] : Infinity;
    const previous = a[i - 1];
    const current = a[i];

    if (current > previous && previous <= beforePrevious) {
      mountainFrom = i - 1;
      continue;
    }

    if (current === previous || beforePrevious === previous) {
      mountainFrom = i;
      continue;
    }

    if (current < previous) {
      longestMountainLength = Math.max(
        longestMountainLength,
        i - mountainFrom + 1
      );
    }
  }

  return longestMountainLength >= 3 ? longestMountainLength : 0;
};
