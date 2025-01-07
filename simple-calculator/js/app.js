function Calculator() {
    this.currentInput = '';
    this.previousInput = '';
    this.operation = '';

    this.updateDisplay = function(displayElement) {
        displayElement.value = this.currentInput || this.previousInput || '0';
    };

    this.appendNumber = function(number) {
        if (this.currentInput.length < 10) {
            this.currentInput += number;
        }
    };

    this.chooseOperation = function(operation) {
        if (this.currentInput === '') return;
        if (this.previousInput !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousInput = this.currentInput;
        this.currentInput = '';
    };

    this.compute = function() {
        let computation;
        const prev = parseFloat(this.previousInput);
        const current = parseFloat(this.currentInput);
        if (isNaN(prev) || isNaN(current)) return;

        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '/':
                computation = prev / current;
                break;
            default:
                return;
        }
        this.currentInput = computation;
        this.operation = '';
        this.previousInput = '';
    };

    this.clear = function() {
        this.currentInput = '';
        this.previousInput = '';
        this.operation = '';
    };
}

document.addEventListener('DOMContentLoaded', () => {
    const calculator = new Calculator();
    const display = document.querySelector('.display');
    const numberButtons = document.querySelectorAll('.number');
    const operationButtons = document.querySelectorAll('.operation');
    const equalsButton = document.querySelector('.equals');
    const clearButton = document.querySelector('.clear');

    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            calculator.appendNumber(button.innerText);
            calculator.updateDisplay(display);
        });
    });

    operationButtons.forEach(button => {
        button.addEventListener('click', () => {
            calculator.chooseOperation(button.innerText);
            calculator.updateDisplay(display);
        });
    });

    equalsButton.addEventListener('click', () => {
        calculator.compute();
        calculator.updateDisplay(display);
    });

    clearButton.addEventListener('click', () => {
        calculator.clear();
        calculator.updateDisplay(display);
    });
});