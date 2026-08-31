// print 1 to n using recursion
function print1ToN(n) {
  if (n === 0) return;
  print1ToN(n - 1);
  console.log(n);
}
print1ToN(5);

// print n to 1 using recursion
function printNTo1(n) {
  if (n === 0) return;
  console.log(n);
  printNTo1(n - 1);
}
printNTo1(5);

//sum 1 to n
function sumN(n) {
  if (n === 0) return 0;
  return n + sumN(n - 1);
}
sumN(5);
