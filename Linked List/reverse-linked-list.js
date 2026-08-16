var reverseList = function (head) {
  let previous = null;
  let current = head;

  while (current !== null) {
    let next = current.next; // Save next node
    current.next = previous; // Reverse the link
    previous = current; // Move previous forward
    current = next; // Move current forward
  }

  return previous; // New head
};
