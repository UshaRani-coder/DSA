//  Brute force approach with Time complexity O(m + n) and Space complexity O(n)
var getIntersectionNode = function (headA, headB) {
  let currentA = headA;
  let currentB = headB;
  let nodeSet = new Set();
  while (currentA !== null) {
    nodeSet.add(currentA);
    currentA = currentA.next;
  }
  while (currentB !== null) {
    if (nodeSet.has(currentB)) {
      return currentB;
    }
    currentB = currentB.next;
  }
  return null;
};

// Optimized approach with space complexity O(1)
// We use two-pointer head switching approach here
var getIntersectionNode = function (headA, headB) {
  let PA = headA; //Poniter of listA, initially pointing to headA
  let PB = headB; //Poniter of listB, initially pointing to headB

  // keep running the loop until we find the intersetcing node where PA===PB
  while (PA !== PB) {
    // Traverse A; when PA reaches null, switch it to headB
    PA = PA === null ? headB : PA.next;

    // Traverse B; when PB reaches null, switch it to headA
    PB = PB === null ? headA : PB.next;
  }

  return PA;
};
