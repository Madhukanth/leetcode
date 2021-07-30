/**
 * @param {number[]} values
 * @return {number}
 */
var minScoreTriangulation = function (values) {
  const n = values.length;
  const dp = new Array(n).fill().map(() => new Array(n).fill(0));

  for (let d = 2; d < n; d++) {
    // Min 2 distance between i and j
    for (let i = 0; i + d < n; i++) {
      const j = i + d;
      dp[i][j] = Infinity;
      for (let k = i + 1; k < j; k++) {
        dp[i][j] = Math.min(
          dp[i][j],
          dp[i][k] + dp[k][j] + values[i] * values[k] * values[j]
        );
      }
    }
  }

  return dp[0][n - 1];
};
