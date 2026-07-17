
//  Brute force - Time Complexity: O(m × n)
var nextGreaterElement = function (nums1, nums2) {
  for (let i = 0; i < nums1.length; i++) {
    //O(m)

    // Find current element's index of nums1 in nums2
    let index = nums2.findIndex((num) => num === nums1[i]); //O(n)

    let j;

    // Search to the right for the next greater element
    for (j = index + 1; j < nums2.length; j++) {
      //O(n)
      if (nums2[j] > nums1[i]) {
        nums1[i] = nums2[j];
        break;
      }
    }

    // No greater element found after it reaches to the end of nums2
    if (j === nums2.length) {
      nums1[i] = -1;
    }
  }

  return nums1;
};

// Optimal solution Time Complexity: O(m + n)
var nextGreaterElement = function (nums1, nums2) {
  let monotonicStack = [];
  let nextGreater = new Map();

  // Build next greater element map for nums2
  for (let i = 0; i < nums2.length; i++) {
    // Resolve elements smaller than current element
    while (
      monotonicStack.length > 0 &&
      nums2[i] > nums2[monotonicStack[monotonicStack.length - 1]]
    ) {
      let prevIndex = monotonicStack.pop();

      // Store the next greater element
      nextGreater.set(nums2[prevIndex], nums2[i]);
    }

    // Store current index waiting for next greater element
    monotonicStack.push(i);
  }

  // Replace nums1 elements with their next greater values
  for (let i = 0; i < nums1.length; i++) {
    if (nextGreater.has(nums1[i])) {
      nums1[i] = nextGreater.get(nums1[i]);
    } else {
      nums1[i] = -1;
    }
  }

  return nums1;
};
