Memoization Recipe
------------------

1) Make it work
    a) Visualize the problem as tree. Node is problem and edge should shrink the problem size. leaves are base case.
    b) implement the tree as recursive
    c) Test it. 

2) Make it Efficient
    a) Add memo object. keys arguements to the function and values return values. 
    b) Add a base case to return memo values. 
    c) store return values into memo object