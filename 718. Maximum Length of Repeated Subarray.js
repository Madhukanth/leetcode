/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  const dp = new Array(nums1.length)
    .fill()
    .map(() => new Array(nums2.length).fill(0));

  for (let i = 0; i < nums1.length; i++) {
    dp[0][i] = nums1[0] === nums2[i] ? 1 : 0;
  }

  for (let i = 0; i < nums2.length; i++) {
    dp[i][0] = nums2[0] === nums1[i] ? 1 : 0;
  }

  let max = 0;

  for (let i = 1; i < nums1.length; i++) {
    for (let j = 1; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      }

      max = Math.max(dp[i][j], max);
    }
  }

  return max;
};
