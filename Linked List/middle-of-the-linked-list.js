var middleNode = function (head) {
  let slowPtr = head; // moves 1 step
  let fastPtr = head; // moves 2 steps

  // Stop when fast reaches the end
  while (fastPtr !== null && fastPtr.next !== null) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next;
  }

  return slowPtr; // slow is at the middle
};

// Time: O(n)
// Space: O(1)
