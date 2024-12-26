// JavaScript Calculator Logic
document.addEventListener('DOMContentLoaded', () => {
    const screen = document.querySelector('.screen');
    const buttons = document.querySelectorAll('.calc-button');

    let currentInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent.trim();

            if (value === 'C') {
                currentInput = '';
                screen.textContent = '0';
            } else if (value === '←') { // Backspace button
                currentInput = currentInput.slice(0, -1);
                screen.textContent = currentInput || '0';
            } else if (value === '÷') { // Division
                currentInput += '/';
                screen.textContent = currentInput;
            } else if (value === '×') { // Multiplication
                currentInput += '*';
                screen.textContent = currentInput;
            } else if (value === '−') { // Subtraction
                currentInput += '-';
                screen.textContent = currentInput;
            } else if (value === '+') { // Addition
                currentInput += '+';
                screen.textContent = currentInput;
            } else if (value === '=') { // Equals
                try {
                    currentInput = eval(currentInput).toString();
                    screen.textContent = currentInput;
                } catch {
                    screen.textContent = 'Error';
                    currentInput = '';
                }
            } else { // Numbers and other characters
                currentInput += value;
                screen.textContent = currentInput;
            }
        });
    });
});
