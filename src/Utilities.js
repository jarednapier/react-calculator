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

export const removeLeadingZeros = (str) => {
    const firstZeroRegex = /^0+/;
    return str.replace(firstZeroRegex, "");

}

export const handleOperators = (operator, expression) => {
    return expression + operator;
}

export const handleSubtraction = (expression) => {
    return expression + "-";
}

export const handleDecimal = (expression) => {
    const doubleDecimalRegex = /\.\d+\./g;
    const newExpression = expression + ".";
    if (newExpression.match(doubleDecimalRegex) !== null) {
        return expression;
    }
    return expression + ".";
}

export const handleNumberInput = (numberString, expression) => {
    return expression + numberString
}

export const calculateExpression = (expression) => {
    return "calculating...";
}


export const arrayReducer = (arr, insert, startRemove, endRemove, opFlag) => {
    if (opFlag) {
        let beginArray = arr.slice(0, startRemove);
        let endArray = arr.slice(endRemove);
        return beginArray.concat(endArray);
    } else {
        let beginArray = arr.slice(0, startRemove);
        let endArray = arr.slice(endRemove + 1);
        return beginArray.concat(insert).concat(endArray);
    }
}

export const reduceExpression = (opArray, numArray, operation) => {
    let opApplicationResult = null;
    for (let i = 0; i < opArray.length; i++) {
        if (opArray[i][0] === operation) {
            switch (operation) {
                case "+":
                    opApplicationResult = numArray[i] + numArray[i + 1];
                    break;
                case "-":
                    opApplicationResult = numArray[i] - numArray[i + 1];
                    break;
                case "*":
                    opApplicationResult = numArray[i] * numArray[i + 1];
                    break;
                case "/":
                    opApplicationResult = numArray[i] / numArray[i + 1];
                    break;
                default:
                    console.log("error");
                    break;
            }
            return [arrayReducer(numArray, opApplicationResult, i, i + 1, false), arrayReducer(opArray, null, i, i + 1, true)];
        }
    }
    return [numArray, opArray];
}

export const getOperatorCount = (opArray) => {
    let [addCount, subCount, mulCount, divCount] = [0, 0, 0, 0];
    for (let i = 0; i < opArray.length; i++) {
        switch (opArray[i][0]) {
            case "+":
                addCount += 1;
                break;
            case "-":
                subCount += 1;
                break;
            case "*":
                mulCount += 1;
                break;
            case "/":
                divCount += 1;
                break;
            default:
                console.log("error");
                break;
        }
    }
    return [mulCount, divCount, addCount, subCount];
};
