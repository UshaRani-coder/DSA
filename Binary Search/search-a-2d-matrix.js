//  Brute force (Time complexity: O(m × n))
var searchMatrix = function (matrix, target) {
  // Iterating through the matrix
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      // compare every element with the target
      if (matrix[row][col] === target) {
        return true;
      }
    }
  }
  return false;
};

// Optimized solution (Time complexity: O(log(m * n)))
var searchMatrix = function (matrix, target) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let left = 0;
  let right = rows * cols - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let row = Math.floor(mid / cols); // Number of complete rows before mid
    let col = mid % cols; // Position within the current row
    let valueAtMid = matrix[row][col];
    if (valueAtMid === target) {
      return true;
    } else if (valueAtMid > target) {
      right = mid - 1; // search left
    } else {
      left = mid + 1; // search right
    }
  }
  return false;
};
// Since each row is sorted and the first element of every row is greater than the last element of the previous row, the entire matrix can be viewed as a single sorted array of size m × n
