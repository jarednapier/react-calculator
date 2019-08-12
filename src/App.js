import React, { useState, useEffect } from 'react';
import './CSS/App.css';
import Display from './Display';
import CalculatorPad from './CalculatorPad';

const App = () => {

    const [expression, setExpression] = useState("0");

    const updateDisplay = (x) => {
        if(expression === "0") {
            if(x === "+" || x === "-" || x === "*" || x === "/" || x === "=" || x === "AC") {
                return;
            } else {
                setExpression(x);
            }  
        } else if(x === "AC") {
            setExpression("0");
        } else if(x === "=") {
            if(expression[expression.length-1] === "+" || expression[expression.length-1] === "-" || expression[expression.length-1] === "*" || expression[expression.length-1] === "/") {
                return;
            } else {
               // Perform calculation of expression
            }
        } else if(x === "+" || x === "-" || x === "*" || x === "/") {
            if(expression[expression.length-1] === "+" || expression[expression.length-1] === "-" || expression[expression.length-1] === "*" || expression[expression.length-1] === "/") {
                return;
            } else {
                setExpression(expression + x);
            }
        } else {
            setExpression(expression + x);
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
