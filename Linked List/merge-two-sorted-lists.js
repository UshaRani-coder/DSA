var mergeTwoLists = function (list1, list2) {
  // Temporary starting node
  let dummy = new ListNode(0);
  // Points to the last node in merged list
  let current = dummy;

  while (list1 !== null && list2 !== null) {
    // Pick the smaller node
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }

    // Move to the attached node
    current = current.next;
  }

  // Attach the remaining list
  current.next = list1 !== null ? list1 : list2;

  // Return the merged list
  return dummy.next;
};
