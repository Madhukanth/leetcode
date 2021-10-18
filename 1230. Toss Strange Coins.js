/**
 * @param {number[]} prob
 * @param {number} target
 * @return {number}
 */
var probabilityOfHeads = function (prob, target) {
  // dp[c][k] is the posibility to get k face with c coin
  var dp = Array(prob.length + 1)
    .fill()
    .map(() => Array(target + 1).fill(0));
  dp[0][0] = 1;

  // there is no coin to get k face
  for (var k = 1; k <= target; k++) dp[0][k] = 0;

  // there are coin to get 0 face
  for (var c = 1; c <= prob.length; c++) {
    dp[c][0] = dp[c - 1][0] * (1 - prob[c - 1]);
  }

  for (var c = 1; c <= prob.length; c++) {
    for (var k = 1; k <= target; k++) {
      var kFace = dp[c - 1][k - 1] * prob[c - 1];
      var kNotFace = dp[c - 1][k] * (1 - prob[c - 1]);
      dp[c][k] = kFace + kNotFace;
    }
  }
  return dp[prob.length][target];
};

// When c = 3 and k = 2, (After tossing 3rd coin, prob to get 2 heads)

// dp[3][2] = dp[2][1] * prob[2] + dp[2][2] * (1 - prob[2])

// if the 3rd coin tossed is head, then take prob of 2nd coin with 1 head +
// if the 3rd coin tossed is tail, then take prob of 2nd coin with 2 heads
