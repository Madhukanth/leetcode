var orderOfLargestPlusSign = function (N, mines) {
  const locs = new Set(); // will store the locations of the mines

  for (const [row, col] of mines) {
    locs.add(`${row}#${col}`);
  }

  let max = 0;

  const dp = [];

  for (let i = 0; i < N; i++) {
    dp[i] = new Array(N);

    for (let j = 0; j < N; j++) {
      dp[i][j] = new Order();

      if (!locs.has(`${i}#${j}`)) {
        dp[i][j].top = i == 0 ? 1 : dp[i - 1][j].top + 1;
        dp[i][j].left = j == 0 ? 1 : dp[i][j - 1].left + 1;
      }
    }
  }

  for (let i = N - 1; i >= 0; i--) {
    for (let j = N - 1; j >= 0; j--) {
      if (!locs.has(`${i}#${j}`)) {
        const top = i == 0 ? 0 : dp[i - 1][j].top;
        const left = j == 0 ? 0 : dp[i][j - 1].left;
        const bottom = i == N - 1 ? 0 : dp[i + 1][j].bottom;
        const right = j == N - 1 ? 0 : dp[i][j + 1].right;

        const min = Math.min(top, left, bottom, right) + 1;

        max = Math.max(max, min);

        dp[i][j].bottom = i == N - 1 ? 1 : dp[i + 1][j].bottom + 1;
        dp[i][j].right = j == N - 1 ? 1 : dp[i][j + 1].right + 1;
      }
    }
  }

  return max;
};

class Order {
  constructor(top = 0, left = 0, bottom = 0, right = 0) {
    this.top = top;
    this.left = left;
    this.bottom = bottom;
    this.right = right;
  }
}
