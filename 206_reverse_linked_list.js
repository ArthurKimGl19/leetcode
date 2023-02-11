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
function traverseAndAdd(node){
    const output = [];
    while (node){
        output.push(node);
        node = node.next;
    }
    return output;
}

var reverseList = function(head) {
    if (!head) return head;
    //iterative approach
    // const queue = traverseAndAdd(head);
    // let reversed, currentNode;

    // for (let i = queue.length - 1; i >= 0; i--){
    //     if (!reversed){
    //         reversed = currentNode = queue[i];
    //     } else {
    //         //set curretNode's next to be queue i and set currentNode to be queue i
    //         currentNode.next = queue[i];
    //         currentNode = queue[i];
    //         if (i === 0){
    //             currentNode.next = null;
    //         }
    //     }
    // }
    // return reversed;

    //iterative approach optimized
    //without use of array; space complexity is now O(1)
    //edge case for this one is to set the last node's next value to be null in reversed list
    // let previousNode, currentNode, reversed;
    // previousNode = head;
    // currentNode = previousNode.next;
    // previousNode.next = null;
    // if (!currentNode){
    //     previousNode.next = null;
    //     return previousNode;
    // }
    // while (currentNode){
    //     if (currentNode.next === null){
    //         reversed = currentNode;
    //     }

    //     const nextNode = currentNode.next;
    //     currentNode.next = previousNode;
    //     previousNode = currentNode;
    //     currentNode = nextNode;
    // }
    // return reversed;
};