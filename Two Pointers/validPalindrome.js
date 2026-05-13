var isPalindrome = function (s) {
  let filteredString = "";

  // keep only alphanumeric characters + convert to lowercase
  for (let index = 0; index < s.length; index++) {
    let currentChar = s[index].toLowerCase();

    if (/[a-z0-9]/.test(currentChar)) {
      filteredString += currentChar;
    }
  }

  // two-pointer comparison from both ends
  for (let leftIndex = 0; leftIndex < filteredString.length; leftIndex++) {
    let rightIndex = filteredString.length - 1;

    // mismatch found → not a palindrome
    if (filteredString[leftIndex] !== filteredString[rightIndex - leftIndex]) {
      return false;
    }
  }

  // all matched → it's a palindrome
  return true;
};
