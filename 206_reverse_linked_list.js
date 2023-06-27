/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head || !head.next){
        return head;
    }

    const storage = [];
    let currentNode = head;
    while (currentNode){
        storage.push(currentNode);
        currentNode = currentNode.next;
    }
    let output;
    while (storage.length > 0){
        const poppedNode = storage.pop();
        if (!output){
            output = poppedNode;
            currentNode = output;
        } else {
            currentNode.next = poppedNode;
            currentNode = poppedNode;
        }
    }
    currentNode.next = null;
    return output;
    //Time Complexity O(n), Space Complexity O(n)
};