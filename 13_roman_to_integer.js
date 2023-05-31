/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const storage = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900
    };
    let output = 0;
    let counter = 0;

    while (counter < s.length){
        if (s[counter] === "I" || s[counter] === "X" || s[counter] === "C"){
            if (counter+1 < s.length){
                const currentRoman = s[counter] + s[counter+1];
                if (storage[currentRoman]){
                    output += storage[currentRoman];
                    counter += 2;
                } else {
                    output += storage[s[counter]];
                    counter++;
                }
            } else {
                output += storage[s[counter]];
                counter++;
            }
        } else {
            output += storage[s[counter]];
            counter++;
        }
    }
    return output;
};
//Time Complexity O(n), Space Complexity O(1);