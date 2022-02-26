
// const fib = (n) => {
//   if (n <= 2) {
//     return 1;
//   }
//   return fib(n-1) + fib(n-2);
// }

// memoization
// js object with key as arg and value as return value. 

const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo [n] = fib(n-1, memo) + fib(n-1, memo);
  return memo[n];
}


console.log(fib(6))
console.log(fib(7))
console.log(fib(8))
console.log(fib(50))