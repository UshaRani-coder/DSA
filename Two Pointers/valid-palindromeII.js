/**
 * Check if a string can become a palindrome
 * after deleting at most one character.
 */
var validPalindrome = function (s) {
  // Helper function to check whether the substring between two indexes is a palindrome.

  const isPalindrome = (left, right) => {
    // Compare characters from both ends
    for (let i = left, j = right; i < j; i++, j--) {
      // If characters don't match, it's not a palindrome
      if (s[i] !== s[j]) {
        return false;
      }
    }

    return true;
  };

  // Two pointers for checking palindrome
  for (let left = 0, right = s.length - 1; left < right; left++, right--) {
    // Mismatch found
    if (s[left] !== s[right]) {
      // Try removing either left character or right character
      return isPalindrome(left + 1, right) || isPalindrome(left, right - 1);
    }
  }

  // String is already a palindrome (default return)
  return true;
};

console.log(validPalindrome("aa"));
