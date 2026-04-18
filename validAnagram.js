function isAnagram(s, t) {
  let map = {};
  if (s.length !== t.length) {
    return false;
  }
  for (let ch of s) {
    map[ch] = (map[ch] || 0) + 1;
  }
  for (let ch of t) {
    map[ch] = (map[ch] || 0) - 1;
    if (map[ch] < 0) {
      return false;
    }
  }
  return true;
}

console.log(isAnagram("tab", "baw"));

//Time complexity: O(n)
//Space complexity: O(n) to store all the values of the strings
