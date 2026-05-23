var longestConsecutive = function (nums) {
  // Store all numbers in a Set for O(1) lookup
  let set = new Set(nums);
  let maxLength = 0;
  // Loop through unique elements of array
  for (let num of set) {
    let current = num;

    // Only start counting if this is the start of a sequence (i.e., there is no previous number: current - 1 is not in set)
    if (!set.has(current - 1)) {
      // Initialize length of current sequence
      let length = 1;

      // Expand the sequence forward while next consecutive number exists
      while (set.has(current + 1)) {
        current++; // move to next consecutive number
        length++; // increase sequence length
      }

      // Update maximum length found so far
      maxLength = Math.max(maxLength, length);
    }
  }

  // Return the longest consecutive sequence length
  return maxLength;
};
