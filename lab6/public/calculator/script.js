// файл script.js
window.onload = function() { 

    let a = ''
    let b = ''
    let expressionResult = ''
    let selectedOperation = null
    
    // окно вывода результата
    outputElement = document.getElementById("result")
    
    // список объектов кнопок циферблата (id которых начинается с btn_digit_)
    digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]')

    function updateOutputSize() {
        const maxLength = 10;
        const baseFontSize = 40;
        const minFontSize = 20;
        const text = outputElement.innerHTML;
        let newFontSize = baseFontSize;
        if (text.length > maxLength) {
            newFontSize = Math.max(minFontSize, baseFontSize - (text.length - maxLength) * 3);
        }
        outputElement.style.fontSize = `${newFontSize}px`;
        if (text.length > 20) {
            outputElement.innerHTML = "Error"
        }
    }

    function onDigitButtonClicked(digit) {
        if (!selectedOperation) {
            if (digit === '0' && (a === '' || a === '0')) {
                a = '0';
            } else if (digit !== '0' && digit !== '.' && a === '0') {
                a = digit;
            } else if (digit === '.' && !a.includes(digit)) {
                if (a === '' || a === '0') {
                    a = '0.';
                }
                else {
                    a += digit;
                }
            } else if (digit !== '.') {
                a += digit;
            }
            outputElement.innerHTML = a;
        } else {
            if (digit === '0' && (b === '' || b === '0')) {
                b = '0';
            } else if (digit !== '0' && digit !== '.' && b === '0') {
                b = digit;
            } else if (digit === '.' && !b.includes(digit)) {
                if (b === '' || b === '0') {
                    b = '0.';
                }
                else {
                    b += digit;
                }
            } else if (digit !== '.') {
                b += digit;
            }
            outputElement.innerHTML = b;
        }
        updateOutputSize();
    }
    
    // устанавка колбек-функций на кнопки циферблата по событию нажатия
    digitButtons.forEach(button => {
        button.onclick = function() {
            const digitValue = button.innerHTML
            onDigitButtonClicked(digitValue)
        }
    });
    
    // установка колбек-функций для кнопок операций
    document.getElementById("btn_op_mult").onclick = function() { 
        if (a === '') return
        selectedOperation = 'x'
    }
    document.getElementById("btn_op_plus").onclick = function() { 
        if (a === '') return
        selectedOperation = '+'
    }
    document.getElementById("btn_op_minus").onclick = function() { 
        if (a === '') return
        selectedOperation = '-'
    }
    document.getElementById("btn_op_div").onclick = function() { 
        if (a === '') return
        selectedOperation = '/'
    }
    document.getElementById("btn_op_percent").onclick = function() { 
        if (a === '') return
        selectedOperation = '%'
    }
    
    // кнопка очищения
    document.getElementById("btn_op_clear").onclick = function() { 
        a = ''
        b = ''
        selectedOperation = ''
        expressionResult = ''
        outputElement.innerHTML = 0
        updateOutputSize();
    }
    
    // кнопка расчёта результата
    document.getElementById("btn_op_equal").onclick = function() { 
        if (a === '' || b === '' || !selectedOperation)
            return
            
        switch(selectedOperation) { 
            case 'x':
                expressionResult = (+a) * (+b)
                break;
            case '+':
                expressionResult = (+a) + (+b)
                break;
            case '-':
                expressionResult = (+a) - (+b)
                break;
            case '/':
                expressionResult = (+a) / (+b)
                break;
            case '%':
                expressionResult = (+a) % (+b)
                break;
        }
        
        a = expressionResult.toString()
        b = ''
        selectedOperation = null
    
        outputElement.innerHTML = a
        updateOutputSize();
    }

    // Операция смены знака +/-
    document.getElementById("btn_op_sign").onclick = function () {
        if (!selectedOperation) {
            a = a.startsWith('-') ? a.slice(1) : `-${a}`;
            outputElement.innerHTML = a;
        } else {
            b = b.startsWith('-') ? b.slice(1) : `-${b}`;
            outputElement.innerHTML = b;
        }
        updateOutputSize();
    };

    // Кнопка стирания последней цифры (backspace)
    document.getElementById("btn_op_backspace").onclick = function () {
        if (!selectedOperation) {
            a = a.slice(0, -1) || '0';
            outputElement.innerHTML = a;
        } else {
            b = b.slice(0, -1) || '0';
            outputElement.innerHTML = b;
        }
        updateOutputSize();
    };

    // Операция вычисления квадратного корня √
    document.getElementById("btn_op_sqrt").onclick = function () {
        if (!selectedOperation) {
            a = Math.sqrt(+a).toString();
            outputElement.innerHTML = a;
        } else {
            b = Math.sqrt(+b).toString();
            outputElement.innerHTML = b;
        }
        updateOutputSize();
    };

    // Операция возведения в квадрат x²
    document.getElementById("btn_op_square").onclick = function () {
        if (!selectedOperation) {
            a = Math.pow(+a, 2).toString();
            outputElement.innerHTML = a;
        } else {
            b = Math.pow(+b, 2).toString();
            outputElement.innerHTML = b;
        }
        updateOutputSize();
    };

    // Операция вычисления факториала x!
    document.getElementById("btn_op_factorial").onclick = function () {
        function factorial(n) {
            if (n === 0 || n === 1) return 1;
            return n * factorial(n - 1);
        }

        if (!selectedOperation) {
            a = factorial(+a).toString();
            outputElement.innerHTML = a;
        } else {
            b = factorial(+b).toString();
            outputElement.innerHTML = b;
        }
        updateOutputSize();
    };

    document.getElementById("btn_op_triple_zero").onclick = function () {
        if (!selectedOperation) {
            if (a === '' || a === '0') {
                a = '0';
            } else {
                a += '000';
            }
            outputElement.innerHTML = a;
        } else {
            if (b === '' || b === '0') {
                b = '0';
            } else {
                b += '000';
            }
            outputElement.innerHTML = b;
        }
        updateOutputSize();
    };

    // Накапливаемое сложение
    document.getElementById("btn_op_accumulate_plus").onclick = function () {
        if (a === '' || b === '') return;
        a = (+a + +b).toString();
        b = '';
        outputElement.innerHTML = a;
        updateOutputSize();
    };

    // Накапливаемое вычитание
    document.getElementById("btn_op_accumulate_minus").onclick = function () {
        if (a === '' || b === '') return;
        a = (+a - +b).toString();
        b = '';
        outputElement.innerHTML = a;
        updateOutputSize();
    };

    // Смена цвета окна вывода результата
    document.getElementById("btn_op_change_output_color").onclick = function () {
        if (outputElement.style.backgroundColor === 'rgb(107, 107, 122)') {
            outputElement.style.backgroundColor = 'rgb(179, 179, 179)';
        } else {
            outputElement.style.backgroundColor = 'rgb(107, 107, 122)';
        }
        updateOutputSize();
    };
};