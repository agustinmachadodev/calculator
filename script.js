const numBtn = document.querySelectorAll('.numBtn');

const addBtn = document.querySelector('.add');
const substractBtn = document.querySelector('.substract');
const multiplyBtn = document.querySelector('.multiply');
const divideBtn = document.querySelector('.divide');

const display = document.querySelector('h1');
display.textContent = 0;

const equalBtn = document.querySelector('.equal');
const restartBtn = document.querySelector('.restart');

let firstNum = null;
let currentNum = '';
let operator = '';
let result = null;

let shouldResetDisplay = false;


numBtn.forEach(num => {
  num.addEventListener('click', () => {
    if (shouldResetDisplay) {
      currentNum = num.textContent;
      shouldResetDisplay = false;
    } else {
      currentNum += num.textContent;
    }
    display.textContent = currentNum;
  });
});


function handleOperator(op) {

  if (operator && currentNum !== '') {
    calculator();
  }

  operator = op;
  firstNum = result !== null ? result : Number(currentNum);
  currentNum = '';
  shouldResetDisplay = true;
  display.textContent = op;
}

addBtn.addEventListener('click', () => handleOperator('+'));
substractBtn.addEventListener('click', () => handleOperator('-'));
multiplyBtn.addEventListener('click', () => handleOperator('x'));
divideBtn.addEventListener('click', () => handleOperator('÷'));


equalBtn.addEventListener('click', () => {
  if (!operator || currentNum === '') return;

  calculator();
  operator = '';
  firstNum = null;
  shouldResetDisplay = true;
});


restartBtn.addEventListener('click', () => {
  display.textContent = 0;
  firstNum = null;
  currentNum = '';
  operator = '';
  result = null;
  shouldResetDisplay = false;
});


function calculator() {
  const secondNum = Number(currentNum);

  if (operator === '÷' && secondNum === 0) {
    display.textContent = 'Error';
    firstNum = null;
    currentNum = '';
    operator = '';
    result = null;
    shouldResetDisplay = true;
    return;
  }

  switch (operator) {
    case '+':
      result = firstNum + secondNum;
      break;
    case '-':
      result = firstNum - secondNum;
      break;
    case 'x':
      result = firstNum * secondNum;
      break;
    case '÷':
      result = firstNum / secondNum;
      break;
  }

  result = Math.round(result * 100000) / 100000;
  display.textContent = result;
}
