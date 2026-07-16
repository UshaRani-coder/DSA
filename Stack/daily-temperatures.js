
//  Brute force O(n²)
var dailyTemperatures = function (temperatures) {
  let answer = [];
  for (let i = 0; i < temperatures.length; i++) {
    answer[i] = 0;
    for (let j = i + 1; j < temperatures.length; j++) {
      if (temperatures[j] > temperatures[i]) {
        answer[i] = j - i;
        break;
      }
    }
  }

  return answer;
};

// Optimized Solution - O(n) Time, O(n) Space

var dailyTemperatures = function (temperatures) {
  const answer = new Array(temperatures.length).fill(0);
  const stack = []; // Stores indices of days waiting for a warmer temperature

  for (let i = 0; i < temperatures.length; i++) {
    // While today's temperature is warmer than the temperature at the top index of the stack, we've found the answer for that previous day.
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const prevIndex = stack.pop();
      answer[prevIndex] = i - prevIndex;
    }

    // Current day is now waiting for a warmer day.
    stack.push(i);
  }

  return answer;
};
