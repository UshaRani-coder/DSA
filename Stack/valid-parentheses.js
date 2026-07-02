var isValid = function (s) {
    let stack = [];

    // Odd characters
    if (s.length % 2 !== 0) return false;

    // Mapping of closing brackets to their matching opening brackets
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        // If it's an opening bracket, push it onto the stack
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            // If stack is empty, there's no matching opening bracket
            if (stack.length === 0) {
                return false;
            }

            // Pop the most recent opening bracket
            const top = stack.pop();

            // Check if it matches the current closing bracket
            if (top !== pairs[char]) {
                return false;
            }
        }
    }

    // If stack is empty, all brackets were matched
    return stack.length === 0;
};