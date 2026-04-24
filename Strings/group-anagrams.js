// Problem: Group Anagrams
// Platform: LeetCode
// Pattern: Hashing
// Difficulty: Medium

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

var groupAnagrams = function (strs) {
  // Create a hashmap to store grouped anagrams
  // key -> sorted string (signature)
  // value -> array of original strings (anagrams)
  let map = {};

  // Traverse each string in the input array (O(n))
  for (let i = 0; i < strs.length; i++) {
    // Convert string into a canonical form
    let key = strs[i].split("").sort().join(""); //O(k log k)(k=length of string)

    // If this key is not present in map, initialize it with empty array
    if (map[key] === undefined) {
      map[key] = [];
    }

    // Push the original string into its corresponding group
    map[key].push(strs[i]);
  }

  // Return all grouped anagrams (only values of hashmap)
  return Object.values(map);
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
