/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
const findPaths = function (m, n, maxMove, startRow, startColumn) {
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const memo = new Map();

  function callDFS(r, c, step) {
    if (r < 0 || c < 0 || r == m || c == n) return 1;

    if (!step) return 0;

    const key = `${r}-${c}-${step}`;
    if (memo.has(key)) return memo.get(key);

    let sum = 0;

    for (let [dr, dc] of dir) {
      sum += callDFS(r + dr, c + dc, step - 1);
    }

    sum %= 10 ** 9 + 7;
    memo.set(key, sum);
    return sum;
  }
  return callDFS(startRow, startColumn, maxMove);
};
