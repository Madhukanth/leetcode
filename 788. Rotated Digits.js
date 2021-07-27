/**
 * @param {number} n
 * @return {number}
 */
const rotatedDigits = function (n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    const isValid = checkValid(i.toString());
    if (isValid) {
      count++;
    }
  }

  function checkValid(num) {
    const invalid = ["3", "4", "7"];
    let rotated = "";
    for (const char of num) {
      if (invalid.includes(char)) return false;

      if (char === "1" || char === "0" || char === "8") {
        rotated = rotated + char;
      } else if (char === "2") {
        rotated = rotated + "5";
      } else if (char === "5") {
        rotated = rotated + "2";
      } else if (char === "6") {
        rotated = rotated + "9";
      } else if (char === "9") {
        rotated = rotated + "6";
      }
    }

    return rotated !== num;
  }

  return count;
};
