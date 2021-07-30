/**
 * @param {string} s
 * @return {number}
 */
var longestRepeatingSubstring = function (s) {
  const n = s.length;
  const dp = new Array(n).fill().map(() => new Array(n).fill(0));

  let max = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (s[i] !== s[j]) continue;

      dp[i][j] = 1 + (i === 0 ? 0 : dp[i - 1][j - 1]);
      max = Math.max(max, dp[i][j]);
    }
  }

  return max;
};
