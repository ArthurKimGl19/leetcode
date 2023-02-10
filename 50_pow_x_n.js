var myPow = function(x, n) {
    // return Math.pow(x,n);

    //recursion method
    if (n === 0){
        return 1;
    } else if (n === 1){
        return x;
    } else if (n === -1){
        return 1/x;
    }
    if (n >= 0){
        return x * myPow(x, n-1);
    } else {
        return 1/x * myPow(x, n+1);
    }
    //attempt, currently not passing all tests
    //revisit issue
    //looks like its not passing for
    // x =
    // 0.00001
    // n =
    // 2147483647
};