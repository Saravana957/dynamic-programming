https://www.freecodecamp.org/news/learn-dynamic-programing-to-solve-coding-challenges/

Dynamic programming is style of coding where we store the result of the algorithm in a data structure while it runs. 

1) Memoization
2) Tabulation

fibnoci series : time complexity O(2^n) 

Time and space complexity:
-------------------------

const foo = (n) => {
    if (n <= 1) {
      returm
    }
    return foo(n-1)
}

foo(5) will call this function 5 times. So time and space complexity of this function is O(n)

const bar = (n) => {
    if (n <= 1){
      return
    }
    return bar(n-1)
}

bar(6) will call this function 4 time. twice as fast. O(n/2) , we can remove any constant so this becomes O(n)

fib(n) has 2^n time complexity