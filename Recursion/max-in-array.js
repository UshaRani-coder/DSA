function findMax(arr, index = 0) {
  // Base case: reached the end of the array
  if (index === arr.length - 1) {
    return arr[index];
  }
  let maxRemaining = findMax(arr, index + 1);

  // comparing between current element and the max of remaining elements of array
  return arr[index] > maxRemaining ? arr[index] : maxRemaining;
}
console.log(findMax([1,5,3,2]));
