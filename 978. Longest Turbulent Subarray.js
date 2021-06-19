/**
 * @param {number[]} arr
 * @return {number}
 */
const maxTurbulenceSize = function (arr) {
  const n = arr.length;
  if (n === 0) return 0;

  let up = true;
  let sum = 0;
  let res = 1;
  for (i = 0; i < arr.length - 1; i++) {
    if (sum > 0) {
      if (arr[i + 1] > arr[i] && up) sum++, (up = false);
      else if (arr[i + 1] < arr[i] && !up) sum++, (up = true);
      else (res = Math.max(res, sum)), (sum = 0), i--;
      continue;
    }

    if (sum === 0) {
      if (arr[i] < arr[i + 1]) (up = false), (sum += 2);
      if (arr[i] > arr[i + 1]) (up = true), (sum += 2);
    }
  }

  return Math.max(res, sum);
};
