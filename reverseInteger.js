// Reverse digits of an integer.
// Example1: x = 123, return 321
// Example2: x = -123, return -321

// Note:
// The input is assumed to be a 32-bit signed integer. Your function should return 0 when the reversed integer overflows.

var reverse = function(x) {
  const reverseNum = Number(Math.abs(x).toString().split('').reverse().join(''));
  if (reverseNum < 2147483647 ) {
    if (x < 0) {
      return -(reverseNum);
    } else {
      return reverseNum;
    }
  } else {
    return 0;
  }
};
