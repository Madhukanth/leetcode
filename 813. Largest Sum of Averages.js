/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumOfAverages = function (A, K) {
  const N = A.length;

  const sums = new Array(N);
  sums[0] = A[0];

  for (let i = 1; i < N; i++) {
    sums[i] = sums[i - 1] + A[i];
  }

  const dp = Array.from(Array(K), () => Array(N).fill(0));
  dp[0][0] = A[0];

  for (let i = 1; i < N; i++) {
    dp[0][i] = sums[i] / (i + 1);
  }

  for (let k = 1; k < K; k++) {
    for (let i = k; i < N; i++) {
      for (let j = k - 1; j < i; j++) {
        const avgBefore = dp[k - 1][j];
        const avgAfter = (sums[i] - sums[j]) / (i - j);

        dp[k][i] = Math.max(dp[k][i], avgBefore + avgAfter);
      }
    }
  }

  return dp[K - 1][N - 1];
};
