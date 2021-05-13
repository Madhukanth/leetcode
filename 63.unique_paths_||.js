/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = function (obstacleGrid) {
  if (obstacleGrid[0][0]) return 0;

  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  const dp = new Array(m).fill().map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dp[i][j] = obstacleGrid[i][j] ? 0 : 1;
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (obstacleGrid[i][j] || (!i && !j)) continue;

      dp[i][j] = (i ? dp[i - 1][j] : 0) + (j ? dp[i][j - 1] : 0);
    }
  }

  return dp[m - 1][n - 1];
};
