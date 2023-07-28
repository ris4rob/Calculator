// const clearBtn = document.querySelector('#clear');
// const sevenBtn = document.querySelector('#seven');

const operation = '1+2';

const firstNumber = parseInt(operation[0]);

const secondNumber = parseInt(operation[2]);

const operator = operation[1];

console.log(firstNumber);
console.log(secondNumber);
console.log(operator);

// Thoughts on this???

function applyOperator(op, a, b) {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    case '%':
      return a % b;
    case '^':
      return Math.pow(a, b);
    default:
      throw Error(`unsupported operator: ${op}`);
  }
}

console.log(applyOperator('*', 3, 5));
console.log(applyOperator('-', 3, 5));
console.log(applyOperator('+', 3, 5));
console.log(applyOperator('!', 3, 5));
