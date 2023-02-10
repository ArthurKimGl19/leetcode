/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function getNumbers (list){
    let output = '';
    while (list){
        output += list.val;
        list = list.next;
    }
    return BigInt(output.split('').reverse().join(""));
}

var addTwoNumbers = function(l1, l2) {
    const l1Value = getNumbers(l1);
    const l2Value = getNumbers(l2);

    let totalValue = String(l1Value + l2Value);
    let outputTree, currentNode;
    for (let i = totalValue.length - 1; i >= 0; i--){
        const currentNumber = Number(totalValue[i]);
        const newNode = new ListNode(currentNumber);
        if (!outputTree){
            outputTree = currentNode = newNode;
        } else {
            currentNode.next = newNode;
            currentNode = newNode;
        }
    }
    return outputTree;
    //Time Complexity O(n), space complexity O(1)
    //For optimal solution:
    //It requires traversing both lists at the same time and adding up each column of numbers
    //If there is a carry over (ie sum is greater than 9), then we have to adjust the previous column of numbers
    //Doing this will speed up getNumbers() speed
};