function dfs(s, len, memo) {
  if (memo.has(s.join(""))) return memo.get(s.join(""));

  for (let i = 0; i < len - 1; i++) {
    if (s[i] === "+" && s[i + 1] === "+") {
      s[i] = "-";
      s[i + 1] = "-";
      const ans = dfs(s, len, memo);
      s[i] = "+";
      s[i + 1] = "+";

      if (!ans) {
        memo.set(s.join(""), true);
        return true;
      }
    }
  }

  memo.set(s.join(""), false);
  return false;
}

/**
 * @param {string} currentState
 * @return {boolean}
 */
var canWin = function (s) {
  if (!s) return false;
  const memo = new Map();
  return dfs(s.split(""), s.length, memo);
};
