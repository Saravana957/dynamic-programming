// Bruteforce Recursion:
// Time : O(2^n+m) Space: O(m + n)

const gridTraveler = (m,n) => {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  return gridTraveler(m-1 , n) + gridTraveler(m, n-1);
}

// memoize it.
// Time : O(m*n) Space: O(m +n)

const mgridTraveler = (m, n, memo={}) => {
  const key = m + ',' + n;
  
  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  memo[key] = mgridTraveler(m-1, n, memo) + mgridTraveler(m, n-1, memo);
  return memo[key]
}

console.log(mgridTraveler(1,1));
console.log(mgridTraveler(2,3));
console.log(mgridTraveler(3,2));
console.log(mgridTraveler(3,3));
console.log(mgridTraveler(18,18));