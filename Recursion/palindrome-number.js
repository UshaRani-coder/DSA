function isPalindrome(n, result = 0, original = n) {
  // Base case: compare original with reversed number when we reach 0 (after reaching left most number)
  if (n === 0) {
    return original === result;
  }

  // Get the last digit
  let lastDigit = n % 10;

  // Build the reversed number
  result = result * 10 + lastDigit;

  // Continue recursion
  return isPalindrome(Math.floor(n / 10), result, original);
}

console.log(isPalindrome(121));
