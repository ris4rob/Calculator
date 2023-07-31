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

// Thoughts on this???

function calculate(op, a, b) {
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

// Events for buttons

one.addEventListener('click', function () {
  display.value += 1;
});
two.addEventListener('click', function () {
  display.value += 2;
});
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
});
del.addEventListener('click', function () {
  display.value = display.value.slice(0, -1);
});
