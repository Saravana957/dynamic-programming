const canSum = (targetsum, numbers, memo = {}) => {
  if (targetsum in memo) return memo[targetsum];
  if (targetsum === 0) return true;
  if (targetsum < 0) return false;

  for (num of numbers) {
    reminder = targetsum - num;
    if (canSum(reminder, numbers, memo) === true){
      memo[targetsum] = true;
      return true;
    }
  }

  memo[targetsum]=false;
  return false;
}

console.log(canSum(5, [3,2]));
console.log(canSum(6, [4,5]));
console.log(canSum(300, [7,14]));