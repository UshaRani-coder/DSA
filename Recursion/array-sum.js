function arraySum(arr, index = 0) {
  // Base case: reached the end of the array(we reach the end of the array after index == array.length)
  if (arr.length == index) {
    return 0;
  }
  // add current element to the sum of remaining elements
  return arr[index] + arraySum(arr, index + 1);
}
console.log(arraySum([1, 2, 3, 4]));
