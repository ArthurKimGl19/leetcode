/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const storage = {};
    const output = [];
    if (strs.length === 1){
        return [strs];
    }

    for (let i = 0; i < strs.length; i++){
        //if i is 0
        //just add
        if (i === 0){
            let formatted = strs[i].split("").sort().join("");
            storage[formatted] = i;
            output.push([strs[i]]);
        } else {
            //need to run helper on strs
            helper(strs[i], storage, i, output);
        }
    }
    return output;
};

//will be time complexity O(nlogn) due to sort, split is O(n), join is O(n), mem will now b O(n)
function helper(wordOne, storage, index, output){
    let formatted = wordOne.split("").sort().join("");
    if ([storage[formatted]] !== undefined){
        output[storage[formatted]].push(wordOne);
    } else {
        console.log("outputtt", output)
        storage[wordOne] = index;
        output[index] = [wordOne];
    }
}