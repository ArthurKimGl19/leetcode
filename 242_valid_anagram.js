var isAnagram = function(s, t) {
    if (s.length === 1 && t.length === 1){
        if (s[0] === t[0]){
            return true;
        } else {
            return false;
        }
    }
    if (s.length !== t.length){
        return false;
    }

    const storage = {};

    for (let i = 0; i < s.length; i++){
        let letter = s[i];
        if (storage[letter] !== undefined){
            storage[letter]++;
        } else {
            storage[letter] = 1;
        }
    }

    for (let i = 0; i < t.length; i++){
        let letter = t[i];
        if (storage[letter] !== undefined && storage[letter] > 0){
            storage[letter]--;
        } else {
            return false;
        }
    }
    return true;
    //Time Complexity O(n), Space Complexity O(1)
};