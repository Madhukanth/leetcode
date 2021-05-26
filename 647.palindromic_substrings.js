/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = function (s) {
  const n = s.length;
  const dp = new Array(n).fill().map(() => new Array(n).fill(false));

  let ans = 0;
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
    ans++;
  }

  for (let i = 0; i < n - 1; i++) {
    dp[i][i + 1] = s[i] === s[i + 1];
    ans += dp[i][i + 1] ? 1 : 0;
  }

  for (let len = 3; len <= n; len++) {
    for (let i = 0, j = i + len - 1; j < n; i++, j++) {
      dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j];
      ans += dp[i][j] ? 1 : 0;
    }
  }

  return ans;
};
