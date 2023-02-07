var isPalindrome = function(head) {
    if (!head.next) return true;

    const storage = [];

    function traverseLinkedList(node, array){
        if (node) {
            array.push(node.val);
            if (node.next) traverseLinkedList(node.next, array);
        }
    }
    traverseLinkedList(head, storage);

    let left = 0;
    let right = storage.length - 1;
    while (left <= right){
        if (storage[left] !== storage[right]) return false;
        left++;
        right--;
    }
    return true;
    //time complexity O(n), space complexity O(n)
};