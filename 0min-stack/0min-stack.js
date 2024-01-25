
var MinStack = function() {
    this.minstack = [];
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.minstack.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.minstack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.minstack[this.minstack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return Math.min(...this.minstack)
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */