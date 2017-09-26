// Given a string, find the length of the longest substring without repeating characters.

// Examples:
// Given "abcabcbb", the answer is "abc", which the length is 3.
// Given "bbbbb", the answer is "b", with the length of 1.
// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

// INPUT
const string = "abcabcbb"; // out: 3
const string2 = "bbbbb"; // out: 1
const string3 = "pwwkew"; // out: 3
const string4 = "c"; // out: 1
const string5 = "aab" // out: 2
const string6 = "dvdf" // out: 3
const string7 = "" // out: 0
const string8 = "sguishzlcvfqlwpiyiiutakxrnmtndmhkgqcqrpuoxlzvchukrqftaclnpecuqjeybjqtalhzyhvcq" // out: 14

// START PROBLEM
const lengthOfLongestSubstring = (s) => {
  const n = s.length;
  let result = 0;
  const characters = {};

  for (let j = 0, i = 0; j < n; j++) {
    if (characters[s[j]]) {
      i = Math.max(characters[s[j]], i);
    }
    result = Math.max(result, j - i + 1);
    characters[s[j]] = j + 1;
  }

  return result;
};
