function power(base, exponent) {
  // base case: any number raised to 0 is 1
  if (exponent === 0) return 1;
  // multiply base by the result of the smaller problem
  return base * power(base, exponent - 1);
}
console.log(power(2, 2));
