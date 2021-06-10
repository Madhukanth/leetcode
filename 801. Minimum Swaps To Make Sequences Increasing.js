/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSwap = function (nums1, nums2) {
  const memo = new Map();

  function dfs(rootA, rootB, idx) {
    if (idx === nums1.length) return 0;

    const key = `${rootA}-${rootB}-${idx}`;
    if (memo.has(key)) return memo.get(key);

    const swap = dfs(nums2[idx], nums1[idx], idx + 1) + 1;
    const noswap = dfs(nums1[idx], nums2[idx], idx + 1);

    let result = swap;
    const maxRoot = Math.max(rootA, rootB);
    const minCurr = Math.min(nums1[idx], nums2[idx]);

    if (maxRoot < minCurr) result = Math.min(swap, noswap);
    else if (rootA >= nums2[idx] || rootB >= nums1[idx]) result = noswap;

    memo.set(key, result);
    return result;
  }

  return Math.min(dfs(nums1[0], nums2[0], 1), dfs(nums2[0], nums1[0], 1) + 1);
};
