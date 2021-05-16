/**
 * @param {number} n
 * @return {number}
 */
const nthUglyNumber = function (n) {
  const dp = [1];
  let p2 = 0;
  let p3 = 0;
  let p5 = 0;
  for (let i = 1; i < n; i++) {
    const r2 = dp[p2] * 2;
    const r3 = dp[p3] * 3;
    const r5 = dp[p5] * 5;

    const min = Math.min(r2, r3, r5);
    if (min === r2) p2++;
    if (min === r3) p3++;
    if (min === r5) p5++;
    dp[i] = min;
  }

  return dp.pop();
};
