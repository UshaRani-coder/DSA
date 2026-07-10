var MinStack = function () {
    // Main stack and minimum stack
    this.stack = [];
    this.minStack = [];
};

MinStack.prototype.push = function (value) {
    // Push into main stack
    this.stack.push(value);

    // First element
    if (this.minStack.length === 0) {
        this.minStack.push(value);
    } else {
        // Current minimum
        let currentMin = this.minStack[this.minStack.length - 1];

        // Store updated minimum
        this.minStack.push(Math.min(value, currentMin));
    }
};


MinStack.prototype.pop = function () {
    // Remove from both stacks
    if (this.stack.length > 0) {
        this.stack.pop();
        this.minStack.pop();
    }
};


MinStack.prototype.top = function () {
    // Return top element
    return this.stack[this.stack.length - 1];
};


MinStack.prototype.getMin = function () {
    // Return current minimum
    return this.minStack[this.minStack.length - 1];
};

let obj = new MinStack();

obj.push(5);
obj.push(2);
obj.push(-1);
obj.push(8);

console.log(obj.top());      // 8
console.log(obj.getMin());   // -1

obj.pop();

console.log(obj.top());      // -1
console.log(obj.getMin());   // -1

obj.pop();

console.log(obj.top());      // 2
console.log(obj.getMin());   // 2

console.log(obj);