// Write a function to find the longest common prefix string amongst an array of strings.

var longestCommonPrefix = function(strs) {
  let shortest = strs[0] || '';
  for (let i = 0; i < strs.length; i++) {
    if (strs[i] === '') {
      return '';
    }
    if (strs[i].length < shortest.length) {
      shortest = strs[i];
    }
  }
  const checkCommonPrefix = function(prefix) {
    if (prefix === '') {
      shortest = '';
      return;
    }
    let counter = 0;
    for (let j = 0; j < strs.length; j++) {
      if (prefix === strs[j].slice(0, prefix.length)) {
        counter++;
      };
    }
    if (counter === strs.length) {
      shortest = prefix;
      return;
    } else {
      prefix = prefix.slice(0, prefix.length - 1);
      checkCommonPrefix(prefix);
    }
  };
  checkCommonPrefix(shortest);
  return shortest;
};
