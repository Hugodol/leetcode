// Determine whether an integer is a palindrome. Do this without extra space.

var isPalindrome = function(x) {
  if (Number(Math.abs(x).toString().split('').reverse().join('')) === x) {
    return true;
  }
  return false;
};
