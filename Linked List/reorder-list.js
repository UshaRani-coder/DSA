var reorderList = function (head) {
  // No need to reorder if the list has 0 or 1 node
  if (head === null || head.next === null) {
    return;
  }

  // Find the middle node
  let slowPtr = head;
  let fastPtr = head;

  while (fastPtr.next !== null && fastPtr.next.next !== null) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next;
  }

  // Split the list
  let secondHalf = slowPtr.next;
  slowPtr.next = null;

  // Reverse the second half
  let current = secondHalf;
  let previous = null;

  while (current !== null) {
    let next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  // merging first half nodes with second half nodes

  // pointer for the first half of the list
  let first = head;

  while (first !== null && previous !== null) {
    // Save next nodes
    let firstNext = first.next;
    let previousNext = previous.next;

    //connect
    first.next = previous;
    previous.next = firstNext;

    // Move both pointers
    first = firstNext;
    previous = previousNext;
  }
};
