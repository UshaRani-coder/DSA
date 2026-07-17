var evalRPN = function (tokens) {
  let stack = [];
  let result;

  for (let i = 0; i < tokens.length; i++) {
    // If token is an operator, perform calculation using last two numbers of the stack
    if (
      tokens[i] === "+" ||
      tokens[i] === "-" ||
      tokens[i] === "*" ||
      tokens[i] === "/"
    ) {
      let right = stack.pop(); // second operand
      let left = stack.pop(); // first operand

      if (tokens[i] === "+") {
        result = left + right;
        stack.push(result);
      }

      if (tokens[i] === "*") {
        result = left * right;
        stack.push(result);
      }

      if (tokens[i] === "/") {
        // Truncate decimal part as required(Math.trunc() → removes decimal part (towards zero))
        result = Math.trunc(left / right);
        stack.push(result);
      }

      if (tokens[i] === "-") {
        result = left - right;
        stack.push(result);
      }
    } else {
      // Store numbers in stack until we find an operator
      stack.push(Number(tokens[i]));
    }
  }

  return result;
};
