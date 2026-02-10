const numBtn = document.querySelectorAll('.numBtn')

const addBtn = document.querySelector('.add')
const substractBtn = document.querySelector('.substract')
const multiplyBtn = document.querySelector('.multiply')
const divideBtn = document.querySelector('.divide');

const display = document.querySelector('h1');
display.textContent = 0;

const equalBtn = document.querySelector('.equal');

const restartBtn = document.querySelector('.restart');

const deleteBtn = document.querySelector('.deleteBtn');


let firstNum = null;
let currentNum = '';
let operator = '';
let result = 0;

//Controla si el próximo número empieza de cero
let shouldResetDisplay = false


numBtn.forEach(num => {

    num.addEventListener('click', () => {

      if(shouldResetDisplay) {
        currentNum = num.textContent;
        shouldResetDisplay = false
      
      } else {
        currentNum += num.textContent;
      }
      display.textContent = currentNum;
    })
})

function handleOperator(op) {

  // Si hay una operación completa, calcular antes (operaciones encadenadas)
  if (firstNum !== null && operator !== '' && currentNum !== '') {
    calculator();
  }

  // Si el usuario aprieta operadores consecutivos,
  // solo se reemplaza el operador (NO se calcula)
  operator = op;
  firstNum = Number(currentNum);
  shouldResetDisplay = true;
  display.textContent = operator;
}

addBtn.addEventListener('click', () => handleOperator('+'));
substractBtn.addEventListener('click', () => handleOperator('-'));
multiplyBtn.addEventListener('click', () => handleOperator('x'));
divideBtn.addEventListener('click', () => handleOperator('÷'));

equalBtn.addEventListener('click', () => {
  if (firstNum === null || operator === '' || currentNum === '') return;

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


let calculator = () => {

  const secondNum = Number(currentNum);

  // División por 0
  if (operator === '÷' && secondNum === 0) {
    display.textContent = '¿Dividir por 0?';
    firstNum = null;
    currentNum = '';
    operator = '';
    shouldResetDisplay = true;
    return;
  }

  switch(operator) {
    case '+':
      result = firstNum + secondNum;
      break
      case '-':
      result = firstNum - secondNum;
      break;
      case 'x':
      result = firstNum * secondNum;
      break;
      case '÷':
      result = firstNum / secondNum;
      break;
      default:
      result = '';
    }

    // Redondeo de decimales largos
    result = Math.round(result * 100000) / 100000;

    display.textContent = result;
    currentNum = '';
}
                    

