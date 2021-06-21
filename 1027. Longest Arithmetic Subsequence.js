/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function (nums) {
  const n = nums.length;
  if (n === 0) return 0;

  const dp = new Array(n).fill(new Map());

  let max = 0;
  for (let i = 1; i < n; i++) {
    const newMap = new Map();
    for (let j = 0; j < i; j++) {
      const diff = nums[i] - nums[j];
      const prevMap = dp[j];

      const len = (prevMap.get(diff) || 1) + 1;
      newMap.set(diff, len);
      max = Math.max(max, len);
    }

    dp[i] = newMap;
  }

  return max;
};
