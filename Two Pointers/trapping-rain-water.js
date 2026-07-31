var trap = function (height) {
  // Two pointers starting from both ends
  let leftPtr = 0;
  let rightPtr = height.length - 1;

  // Storing the maximum height seen so far from left and right
  let leftMax = 0;
  let rightMax = 0;

  // Total trapped water
  let water = 0;

  // Move pointers towards each other
  while (leftPtr <= rightPtr) {
    // If leftMax is smaller, left side is the limiting wall. We can calculate water on the left side
    if (leftMax <= rightMax) {
      // Update the tallest wall seen from the left
      if (height[leftPtr] >= leftMax) {
        leftMax = height[leftPtr];
      } else {
        // Water trapped = left wall height - current bar height
        water += leftMax - height[leftPtr];
      }

      // Move left pointer inward
      leftPtr++;
    } else {
      // Right side is the limiting wall. We can safely calculate water on the right side

      // Update the tallest wall seen from the right
      if (height[rightPtr] >= rightMax) {
        rightMax = height[rightPtr];
      } else {
        // Water trapped = right wall height - current bar height
        water += rightMax - height[rightPtr];
      }

      // Move right pointer inward
      rightPtr--;
    }
  }

  return water;
};

console.log(trap([4,2,0,3,2,5]))