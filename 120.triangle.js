/**
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = function (triangle) {
  const m = triangle.length;
  const dp = new Array(m).fill().map((_, i) => new Array(i + 1).fill(0));
  dp[0][0] = triangle[0][0];

  for (let i = 1; i < m; i++) {
    const n = triangle[i].length;
    for (let j = 0; j < n; j++) {
      if (j === 0) {
        dp[i][j] = triangle[i][j] + dp[i - 1][j];
        continue;
      }

      if (j === n - 1) {
        dp[i][j] = triangle[i][j] + dp[i - 1][j - 1];
        continue;
      }

      dp[i][j] += triangle[i][j] + Math.min(dp[i - 1][j], dp[i - 1][j - 1]);
    }
  }

  return Math.min(...dp[m - 1]);
};
