import React, { useState } from 'react';
import './CSS/App.css';
import Display from './Display';
import CalculatorPad from './CalculatorPad';
import { handleOperators, handleDecimal, handleNumberInput, handleSubtraction, calculateExpression } from './Utilities';

const App = () => {

    const [expression, setExpression] = useState("0");

    const updateDisplay = (x) => {
        let buttonPushResult = null;
        switch (x) {
            case "AC":
                setExpression("0");
                break;
            case "=":
                buttonPushResult = calculateExpression(expression);
                setExpression(buttonPushResult);
                break;
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case "0":
                buttonPushResult = handleNumberInput(x, expression);
                setExpression(buttonPushResult);
                break;
            case "*":
            case "/":
            case "+":
                buttonPushResult = handleOperators(x, expression);
                setExpression(buttonPushResult);
                break;
            case "-":
                buttonPushResult = handleSubtraction(expression);
                setExpression(buttonPushResult);
                break;
            case ".":
                buttonPushResult = handleDecimal(expression);
                setExpression(buttonPushResult);
                break;
            default:
                console.log("error");
                break;
        }
    };

    return (
        <div className="calc-container">
            <Display expression={expression} />
            <CalculatorPad expression={expression} update={updateDisplay} />
        </div>
    );
};

export default App;
