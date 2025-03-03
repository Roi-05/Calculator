function add(a, b) {
    const result = a + b;
    return (result % 1 === 0) ? (a + b) : (a + b).toFixed(5);
}
function multiply(a, b) {
    const result = a * b;
    return (result % 1 === 0) ? (a * b) : (a * b).toFixed(5);
}
function subtract(a, b) {
    const result = a - b;
    return (result % 1 === 0) ? (a - b) : (a - b).toFixed(5);
}
function divide(a, b) {
    const result = a / b;
    return (result % 1 === 0) ? (a / b) : (a / b).toFixed(5);
}



function operator(op, a, b) {
    a = parseFloat(a);
    b = parseFloat(b);

    switch(op) {
        case '+' : return add(a, b);
                   
        case '-' : return subtract(a, b);
                    
        case '*' : return multiply(a, b);
                   
        case '/' : return (b !== 0) ? (divide(a, b)) : (reset = true, 'Division by zero');
                      
        default  :  reset = true;
                    return 'ERROR';
    }
}

const buttons = document.querySelectorAll("button");
const input = document.querySelector("#input");

let firstNum = '';
let secondNum = '';
let pickedOperator = '';
let reset = false;
let lastOperation = null;

buttons.forEach((button) => {
    button.addEventListener('click' , () => {
        let choice = button.id;

        if (!isNaN(choice) || choice === ".") {
            if (reset) {
                input.value = '';
                reset = false
            }
            if (choice === "decimal" && input.value.includes(".")) return;
            input.value += choice;
        }
        else if (['+', '-', '*', '/'].includes(choice)) {
            firstNum = input.value;
            input.value = choice;
            pickedOperator = input.value;
            reset = true;
            lastOperation = null;
        }
        else if (choice === 'reset') {
            input.value = '';
            firstNum = '';
            secondNum = '';
            pickedOperator = '';
        }
        else if (choice === 'del') {
            input.value = input.value.slice(0, -1);
        }
        else if (choice === 'equals') {
            if (lastOperation === 'equals') {
                return;
            }
            secondNum = input.value;
            input.value = operator(pickedOperator, firstNum, secondNum);
            lastOperation = 'equals';
        }
    });
});