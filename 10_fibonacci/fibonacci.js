let memo = [0,1,1];

const fibonacci = function(n) {
    if(n < 1) return "OOPS";
    if(memo[n]) return memo[n];
    memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return memo[n];
};

// Do not edit below this line
module.exports = fibonacci;
