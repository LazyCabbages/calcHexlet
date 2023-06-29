const userInput =  document.querySelector("#display");
let expression = ""; // то, что отображается на экране
let operators = ['/', '*', '-', '+'] // возможные опрераторы
let expressionArray = [] // массив чисел и операторов для рассчета результата
let current = '' // текущеее набираемое число

function press(num) {
    expression += num
    current += num
    userInput.value = expression;
}

function operator(operator) {
    if (current !== '') expressionArray.push(current)
    if (operators.includes(expressionArray[expressionArray.length - 1])) {
        // из expressionArray удалить последний элемент
        return
    }
    expression += (' ' + operator + ' ')
    current = ''
    expressionArray.push(operator)
    userInput.value = expression;
}

function res() {
    expressionArray.push(current)
    if (!operators.includes(expressionArray[expressionArray.length - 1])) {
        current = ''
        let curr;
        for (let i = 1; i < expressionArray.length - 1; i += 2) {
            if (i === 1) {
                curr = calculate(expressionArray[i - 1], expressionArray[i], expressionArray[i + 1])
            } else {
                curr = calculate(curr, expressionArray[i], expressionArray[i + 1])
            }
        }

        expression = '' + curr
        userInput.value = curr
        expressionArray = [curr]
    }
}

function calculate(numOne, operator, numTwo) {
    switch (operator) {
        case '-': return Number(numOne) - Number(numTwo)
        case '+': return Number(numOne) + Number(numTwo)
        case '/': return Number(numOne) / Number(numTwo)
        case '*': return Number(numOne) * Number(numTwo)
    }
}

function clearInput() {
    expressionArray = []
    current = ''
    expression = ''
    userInput.value = ''
}
