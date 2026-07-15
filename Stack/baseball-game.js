var calPoints = function (operations) {
    let sum = 0;
    let recordStack = [];
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === '+') {
            let top = recordStack[recordStack.length - 1];
            let topPrev = recordStack[recordStack.length - 2];
            recordStack.push(top + topPrev);
        }
        else if (operations[i] === 'D') {
            let top = recordStack[recordStack.length - 1];
            recordStack.push(top * 2);
        }
        else if (operations[i] === 'C') {
            recordStack.pop()
        }
        else {
            recordStack.push(Number(operations[i]))
        }

    }
    sum = recordStack.reduce((acc, curr) => acc + curr, 0);
    return sum;
};