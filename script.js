function add(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}
function subtract(a, b) {
    return a - b;
}
function divide(a, b) {
    return a / b;
}



function operator(op, a, b) {
    a = parseFloat(a);
    b = parseFloat(b);

    switch(op) {
        case '+' : return add(a, b);
                   
        case '-' : return subtract(a, b);
                    
        case '*' : return multiply(a, b);
                   
        case '/' : return b !== 0 ? (divide(a, b)) : 'ERROR';
                      
        default  : return 'Invalid choice';
    }
}

