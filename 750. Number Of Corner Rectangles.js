/**
 * @param {number[][]} grid
 * @return {number}
 */
var countCornerRectangles = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const colPairs = new Array(n).fill().map(() => new Array(n).fill(0));

  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (grid[i][j] !== 1) continue;

      for (let j1 = j + 1; j1 < n; j1++) {
        if (grid[i][j1] !== 1) continue;

        res += colPairs[j][j1];
        ++colPairs[j][j1];
      }
    }
  }
  return res;
};
