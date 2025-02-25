// Factorial และ Fibonacci ด้วย Recursion

// Factorial
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log("Factorial of 5:", factorial(5));

// Fibonacci
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("Fibonacci of 7:", fibonacci(7));