// Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

// For example, given the following triangle
// [
//      [2],
//     [3,4],
//    [6,5,7],
//   [4,1,8,3]
// ]
// The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).

var minimumTotal = function(triangle) {
  let finalTotal = Infinity;
  const addAll = (rowI, colI, total) => {
    if (rowI === triangle.length) {
      if (total < finalTotal) {
        finalTotal = total;
      }
      return;
    }
    total += triangle[rowI][colI];
    addAll(rowI + 1, colI, total);
    addAll(rowI + 1, colI + 1, total);
  };
  addAll(0, 0, 0);
  return finalTotal;
};
