/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function (nums) {
  const n = nums.length;
  const memo = new Map();
  function dfs(arr, i, j, turn) {
    if (i > j) return 0;

    const key = `${i}-${j}-${turn}`;
    if (memo.has(key)) return memo.get(key);

    if (turn === 0) {
      const ans = Math.max(
        nums[i] + dfs(arr, i + 1, j, 1),
        dfs(arr, i, j - 1, 1) + nums[j]
      );
      memo.set(key, ans);
      return ans;
    }

    let ans1 = Math.min(dfs(arr, i + 1, j, 0), dfs(arr, i, j - 1, 0));
    memo.set(key, ans1);
    return ans1;
  }

  const p1Score = dfs(nums, 0, n - 1, 0);
  const totalScore = nums.reduce((acc, curr) => acc + curr);
  const p2Score = totalScore - p1Score;

  return p1Score >= p2Score;
};

// DP Solution

//    public class Solution {
//       public boolean PredictTheWinner(int[] nums) {
//         int[][] dp = new int[nums.length + 1][nums.length];
//         for (int s = nums.length; s >= 0; s--) {
//             for (int e = s + 1; e < nums.length; e++) {
//                 int a = nums[s] - dp[s + 1][e];
//                 int b = nums[e] - dp[s][e - 1];
//                 dp[s][e] = Math.max(a, b);
//             }
//         }
//         return dp[0][nums.length - 1] >= 0;
//     }
// }
