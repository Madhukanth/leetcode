function dfs(nums, remain, memo) {
  if (remain === 0) return 1;

  if (memo.has(remain)) return memo.get(remain);

  let count = 0;
  for (let num of nums) {
    if (remain - num < 0) continue;

    count += dfs(nums, remain - num, memo);
  }

  memo.set(remain, count);
  return count;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const combinationSum4 = function (nums, target) {
  return dfs(nums, target, new Map());
};
