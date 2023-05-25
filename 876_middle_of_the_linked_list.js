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
var middleNode = function(head) {
    if (!head.next){
        return head;
    }
    let currentNode = head;
    let count = 0;
    while (currentNode){
        count++;
        currentNode = currentNode.next;
    }
    let middle;
    if (count % 2 === 0){
        middle = (count/2)+1;
    } else {
        middle = Math.ceil(count/2);
    }
    currentNode = head;
    while (middle > 1){
        middle--;
        currentNode = currentNode.next;
    }
    return currentNode;
};

//Time Complexity O(n), Space Complexity O(1);