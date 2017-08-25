// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
const pairs = {
  ')': '(',
  '}': '{',
  ']': '[',
};

var isValid = function(s) {
  const open = [];
  if (s.length <= 1 || s.length%2 !== 0) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      open.push(s[i]);
    } else {
      if (pairs[s[i]] === open[open.length - 1]) {
        open.pop();
      } else {
        return false;
      }
    }
  }
  if (open.length > 0) {
    return false;
  }
  return true;
};
