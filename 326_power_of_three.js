var isPowerOfThree = function(n) {
    if (n < 1) return false;

    let output = 1;
    while (output <= n){
        if (output === n) return true;
        output = output * 3;
    }
    return false;
};