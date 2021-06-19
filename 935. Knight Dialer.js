/**
 * @param {number} n
 * @return {number}
 */
const knightDialer = function (n) {
  if (n === 1) {
    return 10;
  }

  const mod = 1000000007;
  const map = {
    1: [6, 8],
    2: [7, 9],
    3: [4, 8],
    4: [0, 3, 9],
    5: [],
    6: [0, 1, 7],
    7: [2, 6],
    8: [1, 3],
    9: [2, 4],
    0: [4, 6],
  };

  const dp = Array(10)
    .fill(null)
    .map(() => Array(n + 1).fill(0));

  let total = 0;
  for (let num = 0; num <= 9; ++num) {
    dp[num][1] = 1;
    dp[num][2] = map[num].length;
    if (n === 2) {
      total += dp[num][2];
    }
  }

  for (let i = 3; i <= n; ++i) {
    for (let num = 0; num <= 9; ++num) {
      map[num].forEach((d) => (dp[num][i] = (dp[num][i] + dp[d][i - 1]) % mod));
      if (i === n) {
        total = (total + dp[num][i]) % mod;
      }
    }
  }
  return total;
};
