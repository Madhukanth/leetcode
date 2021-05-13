/**
 * @param {string} s
 * @return {number}
 */
const numDecodings = function (s) {
  const n = s.length;
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = s[0] === "0" ? 0 : 1;

  for (let i = 2; i <= n; i++) {
    const lastDigit = Number(s[i - 1]);
    if (lastDigit > 0) {
      dp[i] = dp[i - 1];
    }

    const lastTwoDigits = Number(s[i - 2] + s[i - 1]);
    if (lastTwoDigits >= 10 && lastTwoDigits <= 26) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[n];
};
