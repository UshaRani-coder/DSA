function firstUniqChar(s) {
  let map = {};

  // Step 1: build frequency map
  for (let ch of s) {
    map[ch] = (map[ch] || 0) + 1;
  }

  // Step 2: find first unique character
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === 1) {
      return i;
    }
  }

  return -1;
}

console.log(firstUniqChar("leetcode")); 