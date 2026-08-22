var hasCycle = function (head) {
  // Both pointers start at the head of the linked list
  let slowPtr = head;
  let fastPtr = head;
  //as long as fastPtr exists AND there is at least one node after it, keep going.
  while (fastPtr !== null && fastPtr.next !== null) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next;
    // If both pointers point to the same node, a cycle exists
    if (slowPtr === fastPtr) {
      return true;
    }
  }
  // Fast pointer reached the end, so there is no cycle
  return false;
};
