// Display
const display = document.querySelector('#display');

// Variables for buttons
const zero = document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const clear = document.querySelector('#clear');
const del = document.querySelector('#del');
const dot = document.querySelector('#dot');
const equals = document.querySelector('#equals');
const plus = document.querySelector('#plus');
const take = document.querySelector('#take');
const times = document.querySelector('#times');
const divide = document.querySelector('#divide');

// Variables for calculation
let a;
let b;
let count = 0;
let operator;

// Calculate result takes a string operator and 2 numbers,
// Returns calculation of a and b based on chosen operator;
function calculate(operator, a, b) {
  a = parseInt(a);
  b = parseInt(b);
  switch (operator) {
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

// Events for buttons
// one.addEventListener('click', function () {
//   display.value += 1;
// });
// two.addEventListener('click', function () {
//   display.value += 2;
// });
three.addEventListener('click', function () {
  display.value += 3;
});
four.addEventListener('click', function () {
  display.value += 4;
});
five.addEventListener('click', function () {
  display.value += 5;
});
six.addEventListener('click', function () {
  display.value += 6;
});
seven.addEventListener('click', function () {
  display.value += 7;
});
eight.addEventListener('click', function () {
  display.value += 8;
});
nine.addEventListener('click', function () {
  display.value += 9;
});
zero.addEventListener('click', function () {
  display.value += 0;
});
clear.addEventListener('click', function () {
  display.value = '';
  count = 0;
  a = '';
  b = '';
});
del.addEventListener('click', function () {
  display.value = display.value.slice(0, -1);
});

// Events for Operators
// ADDITION
add.addEventListener('click', function () {
  a = display.value;
  operator = '+';
  count++;
});
add.addEventListener('click', function () {
  // Handle the case where 'a' is null or not a valid number.
  if (a === null || isNaN(a)) {
    a = display.value;
    operator = '+';
    count++;
  } else {
    b = display.value;
    operator = '+';
  }
});
// EQUALS
equals.addEventListener('click', function () {
  b = display.value;
  let result = calculate(operator, a, b);
  a = result;
  display.value = result;
  operator = '';
});

// Once A is not NULL
// Once Operator is not NULL
// When number is pressed clear display once!

one.addEventListener('click', function () {
  if (count === 0) {
    display.value += 1;
  } else if (count === 1) {
    display.value = '';
    display.value += 1;
    count--;
  }
});
two.addEventListener('click', function () {
  if (count === 0) {
    display.value += 2;
  } else if (count === 1) {
    display.value = '';
    display.value += 2;
    count--;
  }
});
