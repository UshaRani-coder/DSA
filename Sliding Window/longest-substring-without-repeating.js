// Problem: Longest Substring Without Repeating Characters
// Pattern: Sliding Window + Set
// Platform: LeetCode
// Difficulty: Medium

var lengthOfLongestSubstring = function (s) {
  let set = new Set(); // stores current window characters
  let left = 0; // left pointer
  let maxLen = 0; // result

  for (let right = 0; right < s.length; right++) {
    // If duplicate found, shrink window from left
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }

    // add current character to window
    set.add(s[right]);

    // update max length
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
};
