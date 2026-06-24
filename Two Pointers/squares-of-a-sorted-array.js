//  Brute force approach O(n log n)
var sortedSquares = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * nums[i];
  }
  let sortedArr = nums.sort((a, b) => a - b);
  return sortedArr;
};




// Optimal solution O(n)
var sortedSquares = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  // Position where next largest square should be placed
  let nextPos = nums.length - 1;

  // Result array
  let result = new Array(nums.length);

  while (left <= right) {
    let absLeft = Math.abs(nums[left]);
    let absRight = Math.abs(nums[right]);

    if (absLeft > absRight) {
      result[nextPos] = absLeft * absLeft;
      left++;
    } else {
      result[nextPos] = absRight * absRight;
      right--;
    }

    // Move to next position from the end
    nextPos--;
  }

  return result;
};
