var MyStack = function() {
    this.storage = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.storage.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.storage.pop();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.storage[this.storage.length-1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    if (this.storage.length > 0) return false;
    else return true;
};

//Time Complexity
//Push - O(1), Pop - O(1), Top - O(1), Empty - O(1)
//Space Complexity - O(n)

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

