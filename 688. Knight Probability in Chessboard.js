/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
const knightProbability = function (n, k, row, column) {
  const directions = ([i, j]) => [
    [i - 2, j - 1],
    [i - 2, j + 1],
    [i - 1, j - 2],
    [i - 1, j + 2],
    [i + 1, j - 2],
    [i + 1, j + 2],
    [i + 2, j - 1],
    [i + 2, j + 1],
  ];

  const isOutOfBounds = ([i, j]) => i < 0 || j < 0 || i >= n || j >= n;

  const mem = {};

  const nextProb = (pos, d) => {
    if (isOutOfBounds(pos)) return 0;
    if (d === 0) return 1;
    if (mem[pos] && mem[pos][d] != undefined) return mem[pos][d];

    let p = 0;
    for (const next of directions(pos)) {
      p += nextProb(next, d - 1);
    }
    mem[pos] = mem[pos] || {};
    return (mem[pos][d] = p / 8);
  };

  return nextProb([row, column], k);
};
