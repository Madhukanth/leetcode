/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function (nums) {
  const n = nums.length;
  const dp = new Array(n).fill(Infinity);
  for (let n of nums) {
    const idx = binarySearch(dp, n);
    dp[idx] = n;
  }

  const res = dp.indexOf(Infinity);
  return res === -1 ? nums.length : res;
};

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const mid = (left + right) >> 1;

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}

// 0,3,5,6,1,2,3,4,5,6,7
