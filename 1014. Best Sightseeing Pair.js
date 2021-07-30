/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function (A) {
  let score = A[0];
  let current = A[0];

  for (let i = 1; i < A.length; i++) {
    current--; // Increasing distance on each iteration
    score = Math.max(score, current + A[i]);

    if (A[i] > current) {
      current = A[i];
    }
  }
  return score;
};
