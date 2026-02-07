const numBtn = document.querySelectorAll('.numBtn')

const addBtn = document.querySelector('.add')
const substractBtn = document.querySelector('.substract')
const multiplyBtn = document.querySelector('.multiply')
const divideBtn = document.querySelector('.divide');

const equalBtn = document.querySelector('.equal');

const display = document.querySelector('h1');

let operator = '';

let currentNum = '';

let firstNum = 0;
let lastNum = 0;

let result = 0;

numBtn.forEach(num => {

    num.addEventListener('click', () => {
      currentNum += num.textContent;
      display.textContent = currentNum;
    })
})


addBtn.addEventListener('click', () => {
  operator = '+';
  firstNum = Number(currentNum);
  currentNum = '';
  display.textContent = operator;

})


substractBtn.addEventListener('click', () => {
  operator = '-';
  firstNum = Number(currentNum);
  currentNum = '';
  display.textContent = operator;
})

multiplyBtn.addEventListener('click', () => {
  operator = 'x';
  firstNum = Number(currentNum);
  currentNum = '';
  display.textContent = operator;
})

divideBtn.addEventListener('click', () => {
  operator = '÷';
  firstNum = Number(currentNum);
  currentNum = '';
  display.textContent = operator;
})

equalBtn.addEventListener('click', () => {
  lastNum = Number(currentNum);
  console.log(calculator())
})


let calculator = () => {
  switch(operator) {
    case '+':
      result = firstNum + lastNum;
      break
      case '-':
      result = firstNum - lastNum
      break;
      case 'x':
      result = firstNum * lastNum
      break;
      case '÷':
      result = firstNum / lastNum
      break;
      default:
      result = '';
    }
    return display.textContent = result
}
                    
