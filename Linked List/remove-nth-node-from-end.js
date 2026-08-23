var removeNthFromEnd = function (head, n) {
  //dummy node that helps to handle when removing the head
  let dummy = new ListNode(0);
  //attach head to dummy node
  dummy.next = head;

  // start slowPtr at dummy to reach the node before the target
  let slowPtr = dummy;
  let fastPtr = head;

  // move fastPtr n steps ahead
  for (let i = 0; i < n; i++) {
    fastPtr = fastPtr.next;
  }

  // move both until fastPtr reaches the end
  while (fastPtr !== null) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next;
  }

  // remove the nth node from the end
  slowPtr.next = slowPtr.next.next;

  // return the updated head
  return dummy.next;
};
