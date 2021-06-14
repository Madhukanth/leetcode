/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function (arr) {
  const idxMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];

    idxMap.set(val, i);
  }

  const n = arr.length;
  const dp = new Array(n).fill().map(() => new Array(n).fill(2));

  let res = 0;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      const diff = arr[i] - arr[j];
      if (diff >= arr[j] || !idxMap.has(diff)) continue;

      const k = idxMap.get(diff);
      dp[i][j] = dp[j][k] + 1;
      res = Math.max(res, dp[i][j]);
    }
  }

  return res;
};
