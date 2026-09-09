function fibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  // In Fibonacci sequence, we add previous two numbers to get the current number
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(2));
