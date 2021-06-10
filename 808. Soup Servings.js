/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function (n) {
  const options = [
    [100, 0],
    [75, 25],
    [50, 50],
    [25, 75],
  ];

  const memo = new Map();

  if (n > 4800) return 1.0;

  function dfs(a, b) {
    const key = `${a}-${b}`;
    if (memo.has(key)) return memo.get(key);

    if (a >= n && b < n) return 1;
    if (a >= n && b >= n) return 0.5;
    if (a < n && b >= n) return 0;

    let probs = 0;
    for (let [a1, b1] of options) {
      probs += dfs(a + a1, b + b1);
    }

    memo.set(key, probs / 4);
    return probs / 4;
  }

  return dfs(0, 0); // Initially server 0,0
};
