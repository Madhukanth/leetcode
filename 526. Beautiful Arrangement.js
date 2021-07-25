/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function (n) {
  let count = 0;

  function calculate(pos, vis) {
    if (pos > n) {
      count++;
    }

    for (let i = 1; i <= n; i++) {
      if (!vis[i] && (pos % i === 0 || i % pos === 0)) {
        vis[i] = true;
        calculate(pos + 1, vis);
        vis[i] = false;
      }
    }
  }

  const visited = new Array(n + 1).fill(false);
  calculate(1, visited);
  return count;
};
