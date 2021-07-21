/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  const m = mat.length;
  const n = mat[0].length;
  const dp = new Array(m).fill().map(() => new Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) {
        dp[i][j] = 0;
        continue;
      }

      dp[i][j] = Math.min(
        i === 0 ? Infinity : dp[i - 1][j] + 1,
        j === 0 ? Infinity : dp[i][j - 1] + 1
      );
    }
  }

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (dp[i][j] === 0) continue;

      dp[i][j] = Math.min(
        dp[i][j],
        i === m - 1 ? Infinity : dp[i + 1][j] + 1,
        j === n - 1 ? Infinity : dp[i][j + 1] + 1
      );
    }
  }

  return dp;
};
