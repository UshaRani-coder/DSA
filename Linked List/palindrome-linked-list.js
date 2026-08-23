var isPalindrome = function (head) {
  let slowPtr = head;
  let fastPtr = head;

  // find the middle node
  while (fastPtr !== null && fastPtr.next !== null) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next;
  }

  // reverse the other half from the middle(slowPtr)
  let previous = null;
  while (slowPtr !== null) {
    let next = slowPtr.next;
    slowPtr.next = previous;
    previous = slowPtr;
    slowPtr = next;
  }

  // comparing the first half with the reversed next half
  let current = head;
  while (previous !== null) {
    if (current.val !== previous.val) {
      return false;
    }
    current = current.next;
    previous = previous.next;
  }
  return true; // we return true after the loop completes and all the values are matched
};
