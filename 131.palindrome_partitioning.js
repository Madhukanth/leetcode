function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== right[left]) return false;
  }

  return true;
}

const partition = (s) => {
  const result = [];
  helper(s, [], result);
  return result;
};

function helper(s, curr, result) {
  if (!s.length) {
    result.push(curr);
  }

  for (let i = 1; i <= s.length; i++) {
    const left = s.substring(0, i);
    const right = s.substring(i);

    if (isPalindrome(left)) {
      helper(right, [...curr, left], result);
    }
  }
}
