/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
const makesquare = function (matchsticks) {
  const total = matchsticks.reduce((acc, curr) => acc + curr);
  if (total % 4 !== 0) return false;

  const edge = total / 4;
  matchsticks.sort((a, b) => b - a);

  function dfs(sums, pos, edge) {
    if (pos >= matchsticks.length)
      return (
        sums[0] === edge &&
        sums[1] === edge &&
        sums[2] === edge &&
        sums[3] === edge
      );

    for (let i = 0; i < 4; i++) {
      if (sums[i] + matchsticks[pos] > edge) continue;

      sums[i] += matchsticks[pos];
      if (dfs(sums, pos + 1, edge)) return true;
      sums[i] -= matchsticks[pos];
    }

    return false;
  }

  return dfs(new Array(4).fill(0), 0, edge);
};
