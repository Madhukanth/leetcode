/**
 * @param {number[]} arr
 * @return {number}
 */
var subarrayBitwiseORs = function (arr) {
  let res = new Set();
  let prev = new Set();

  prev.add(0);
  for (let ele of arr) {
    const temp = new Set();
    for (let val of prev) {
      temp.add(ele | val);
    }

    temp.add(ele);
    prev = new Set(temp);
    temp.forEach((val) => res.add(val));
  }

  return res.size;
};

// 1
// 2
// 1 | 2
// 4
// 1 | 4
// 2 | 4
// 1 | 2 | 4
