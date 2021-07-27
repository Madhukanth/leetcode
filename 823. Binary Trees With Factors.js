/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function (A) {
  A.sort((a, b) => a - b);

  let ans = 0;
  const memo = new Map();
  const modulo = 1000000007;

  for (const num of A) {
    let ways = 1;
    for (let j = 0, left = A[0]; left < num; left = A[++j]) {
      const right = num / left;
      if (memo.has(right)) {
        ways = (ways + memo.get(left) * memo.get(right)) % modulo;
      }
    }

    memo.set(num, ways);
    ans = (ans + ways) % modulo;
  }

  return ans;
};

// [2, 4, 5, 10] ----> A    memo ===> {2 : 1, 4 : 2, 5 : 1, 10 : 3}    ans -----> 7    ways ----> 3

// 10 ---- > num

// 2 -----> left

// left < num ---- > 5 < 10

// right ----> 2
