#H1 Grid Traveler Problem

Say that you are a traveller in a 2 diamentional grid. you begin in top left corner and goal is to travel to the botton right corner. You can only move dowm or right. 

In how many ways can you travel to the goal on the grid with diamension m*n

write a function `gridTraveler(m, n)` that calculates this. 

==========================================================================================================================================================================

Steps
-----

1. Try to frame the problem with relatively small inputs. 
...gridTraveler(2,3) -> 3 

2. smallest values. This gives base cases.  
...gridTraveler(1,1) -> 1
...gridTraveler(0,1) -> grid empty/ invalid so return 0 
...gridTraveler(8,0) -> returns 0. 

3. Draw a tree for the gridTraveler(2,3)
...node is (2,3) Down and Right. 


=================

Learnings
---------

1. Dont look before leap 
2. Think of recursive function as tree, use it to implement brute force and then optimize it.
