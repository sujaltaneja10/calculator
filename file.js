let firstNumber = 0, secondNumber = null, operator = null;

function add(a, b) {
    return +a + +b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a/ b;
}

function operate(firstNumber, operator, secondNumber) {
    if (operator == '+') operator = add;
    if (operator == '-') operator = subtract;
    if (operator == '*') operator = multiply;
    if (operator == '/') operator = divide;
    return operator(firstNumber, secondNumber);
}

const container = document.querySelector(".container");
const screen = document.querySelector(".screen");

document.querySelectorAll(".green").forEach((e) => {
    e.addEventListener('click', () => {
        if (operator == null) {
            if (screen.textContent < 0) {
                screen.textContent = -screen.textContent;
                screen.textContent += e.textContent;
                screen.textContent = -screen.textContent;
            }
            else screen.textContent += e.textContent;
        }
        else {
            if (secondNumber == null) screen.textContent = '';
            screen.textContent += e.textContent;
            secondNumber = +screen.textContent;
        }
    });
});

document.querySelector('.sign-change').addEventListener('click', () => {
    if (operator == null) {
        firstNumber = -Number(screen.textContent);
        screen.textContent = firstNumber;
    }
    else {
        secondNumber = -Number(screen.textContent);
        screen.textContent = secondNumber;
    }
});

document.querySelector('.percent').addEventListener('click', () => {
    if (secondNumber == null) {
        firstNumber = Number(screen.textContent) / 100;
        screen.textContent = firstNumber;
    }
    else {
        secondNumber= Number(screen.textContent) / 100;
        screen.textContent = secondNumber;
    }
});

document.querySelectorAll(".symbols").forEach((e) => {
    e.addEventListener('click', () => {
        if (secondNumber == null) {
            firstNumber = +screen.textContent;
            operator = e.textContent;
            if (operator == '+/-' || operator == '%') operator = null;
        }
        else {
            screen.textContent = operate(firstNumber, operator, secondNumber);
            firstNumber = +screen.textContent;
            secondNumber = null;
            operator = e.textContent;;
        }
    });
});

document.querySelector('.clear').addEventListener('click', () => {
    firstNumber = 0;
    screen.textContent = 0;
    operator = null;
    secondNumber = null;
});

document.querySelector('.decimal').addEventListener('click', () => {
    if (!screen.textContent.includes('.')) {
        screen.textContent += '.';
    }
});