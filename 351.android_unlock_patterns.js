/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const numberOfPatterns = function (m, n) {
  let count = {
    "1@3": 2,
    "1@9": 5,
    "1@7": 4,
    "3@1": 2,
    "3@9": 6,
    "3@7": 5,
    "7@1": 4,
    "7@3": 5,
    "7@9": 8,
    "9@1": 5,
    "9@3": 6,
    "9@7": 8,
    "2@8": 5,
    "8@2": 5,
    "4@6": 5,
    "6@4": 5,
  };

  let res = 0;
  let visited = {};

  function backtrack(arr) {
    if (arr.length > n) return;

    if (arr.length >= m && arr.length <= n) {
      res++;
    }

    for (let i = 1; i < 10; i++) {
      if (visited[i]) continue;

      const last = arr[arr.length - 1];
      if (last && count[`${last}@${i}`] && !visited[count[`${last}@${i}`]])
        continue;

      visited[i] = true;
      arr.push(i);
      backtrack(arr);
      arr.pop();
      visited[i] = false;
    }
  }

  backtrack([]);
  return res;
};
