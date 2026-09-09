function reverseNumber(n, result = 0) {
  // Base case: return reversed number
  if (n === 0) {
    return result;
  }

  // Get the last digit
  let lastDigit = n % 10;

  // Add digit to the reversed number
  result = result * 10 + lastDigit;

  // Remove last digit and continue recursion
  return reverseNumber(Math.floor(n / 10), result);
}

console.log(reverseNumber(1204)); // 4021
