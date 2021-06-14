/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  const M = matrix.length;
  if (M === 0) return 0;

  const dp = new Array(M).fill().map((a) => new Array(M).fill(Infinity));
  dp[0] = matrix[0];
  for (let r = 1; r < M; r++) {
    for (let c = 0; c < M; c++) {
      const curr = matrix[r][c];
      const top = curr + dp[r - 1][c];
      const topL = curr + (dp[r - 1][c - 1] || Infinity);
      const topR = curr + (dp[r - 1][c + 1] || Infinity);
      dp[r][c] = Math.min(top, topL, topR);
    }
  }
  return Math.min(...dp[M - 1]);
};
