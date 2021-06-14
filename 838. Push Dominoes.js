/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dom) {
  const n = dom.length;
  const A = dom.split("");
  const forces = new Array(n).fill(0);

  let force = 0;
  for (let i = 0; i < n; i++) {
    if (A[i] === "R") force = n;
    else if (A[i] === "L") force = 0;
    else force = Math.max(force - 1, 0);
    forces[i] = force;
  }

  force = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (A[i] === "L") force = n;
    else if (A[i] === "R") force = 0;
    else force = Math.max(force - 1, 0);
    forces[i] -= force;
  }

  return forces
    .map((val) => {
      if (val > 0) return "R";

      if (val < 0) return "L";

      return ".";
    })
    .join("");
};
