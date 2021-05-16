/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalSquare = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  const dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0));

  let max = 0;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (matrix[i - 1][j - 1] !== "1") {
        continue;
      }

      const left = Number(dp[i][j - 1]);
      const top = Number(dp[i - 1][j]);
      const leftTop = Number(dp[i - 1][j - 1]);
      dp[i][j] = (Math.min(left, top, leftTop) + 1).toString();
      max = Math.max(max, Number(dp[i][j]));
    }
  }

  return max * max;
};
