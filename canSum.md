Problem:
--------

write a function `canSum(targetSum, numbers)` that takes in targetSum and array of numbers as arguements. 

The function should return a booleam value indicating whether or not its possible to generate the target sum using the array of numbers provieded as input. 

May use a number as many times as needed. 
All are non negative numbers. 

canSum(7, [5,3,4,7]) -> true
canSum(7, [2,3]) -> false

Approach:
--------

1) Height of the tree = m 
   Branching Factor = n
   time O(n^m) to time O(m*n)
   space O(m)

