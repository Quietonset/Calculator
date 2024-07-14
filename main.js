function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.textContent += value;
    display.style = 'padding-bottom: 20px; padding-right: 10px;'
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.textContent = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.textContent = eval(display.textContent);
    } catch {
        display.textContent = 'Error';
    }
}