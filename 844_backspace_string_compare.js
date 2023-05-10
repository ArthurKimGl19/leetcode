/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const storageS = [];
    const storageT = [];

    stringAnalyzer(s,storageS);

    stringAnalyzer(t,storageT);

    let newS = storageS.join('');
    let newT = storageT.join('');

    if (newS !== newT) return false;
    else return true;
};

var stringAnalyzer = function(string, storage) {
    for (let i = 0; i < string.length; i++){
        if (string[i] === "#"){
            storage.pop();
        } else {
            storage.push(string[i])
        }
    }
}

//Time Complexity O(n), Space Complexity O(n);