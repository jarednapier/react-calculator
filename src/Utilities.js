export const buttonNames = {
    clear: "AC",
    divide: "/",
    multiply: "*",
    subtract: "-",
    add: "+",
    equals: "=",
    decimal: ".",
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9"
};

const removeLastChar = (str) => {
    return str.slice(0, str.length - 1);
}

export const handleOperators = (operator, expression) => {
    const doubleOperatorRegex = /[.*/+]+[.*/+]$/;
    const tripleOperatorRegex = /[*/+]-[*/+]$/;
    const newExpression = expression + operator;
    if (newExpression.match(doubleOperatorRegex) !== null) {
        return removeLastChar(expression) + operator;
    }
    if (newExpression.match(tripleOperatorRegex) !== null) {
        return removeLastChar(removeLastChar(expression)) + operator;
    }
    return expression + operator;
}

export const handleSubtraction = (expression) => {
    if (expression[expression.length - 1] === "-") {
        return expression;
    }
    return expression + "-";
}

export const handleDecimal = (expression) => {
    const doubleDecimalRegex = /\.\d+\.|\.\.$/g;
    const newExpression = expression + ".";
    if (newExpression.match(doubleDecimalRegex) !== null) {
        return expression;
    }
    return expression + ".";
}

export const handleNumberInput = (numberString, expression) => {
    const leadingZeroRegex = /^0$|[+*/-]0$/;
    // const newExpression = expression + numberString;
    if (expression.match(leadingZeroRegex) !== null) {
        return removeLastChar(expression) + numberString;
    }
    return expression + numberString
}

export const calculateExpression = (expression) => {
    // eslint-disable-next-line
    return eval(expression);
}
