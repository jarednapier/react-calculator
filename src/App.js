import React, { useState } from 'react';
import './CSS/App.css';
import Display from './Display';
import CalculatorPad from './CalculatorPad';
import { reduceExpression, getOperatorCount } from './Utilities';

const App = () => {

    const [expression, setExpression] = useState("0");

    const updateDisplay = (x) => {
        if (expression === "0") {
            if (x === "+" || x === "-" || x === "*" || x === "/" || x === "=" || x === "AC") {
                return;
            } else if (x === ".") {
                setExpression("0" + x);
            } else {
                setExpression(x);
            }
        } else if (x === "AC") {
            setExpression("0");
        } else if (x === "=") {
            if (expression[expression.length - 1] === "+" || expression[expression.length - 1] === "-" || expression[expression.length - 1] === "*" || expression[expression.length - 1] === "/" || expression[expression.length - 1] === ".") {
                return;
            } else {
                // Perform calculation of expression
                let finalExpression = expression;
                let algoResultArray = [];
                let opCountArray = [];
                let numberArray = [];
                let operatorLocationArray = [];
                let operatorMDLocationArray = [];
                let operatorASLocationArray = [];
                for (let i = 0; i < finalExpression.length; i++) {
                    if (finalExpression[i] === "*" || finalExpression[i] === "/") {
                        operatorMDLocationArray.push([finalExpression[i], i]);
                        operatorLocationArray.push([finalExpression[i], i]);
                    }
                    if (finalExpression[i] === "+" || finalExpression[i] === "-") {
                        operatorASLocationArray.push([finalExpression[i], i]);
                        operatorLocationArray.push([finalExpression[i], i]);
                    }
                }
                for (let i = 0; i < operatorLocationArray.length; i++) {
                    if (i === 0) {
                        numberArray.push(Number.parseFloat(finalExpression.slice(0, operatorLocationArray[i][1])));
                    } else {
                        numberArray.push(Number.parseFloat(finalExpression.slice(operatorLocationArray[i - 1][1] + 1, operatorLocationArray[i][1])));
                    }
                    if (i === operatorLocationArray.length - 1) {
                        numberArray.push(Number.parseFloat(finalExpression.slice(operatorLocationArray[i][1] + 1)));
                    }
                }
                opCountArray = getOperatorCount(operatorLocationArray);
                let i = 0;
                while (operatorLocationArray.length > opCountArray[2] + opCountArray[3]) {
                    if (i > operatorLocationArray.length - 1) {
                        i = 0;
                    }
                    if (operatorLocationArray[i][0] === "*") {
                        algoResultArray = reduceExpression(operatorLocationArray, numberArray, "*");
                        numberArray = algoResultArray[0];
                        operatorLocationArray = algoResultArray[1];
                        i += 1;
                        continue;
                    }
                    if (operatorLocationArray[i][0] === "/") {
                        algoResultArray = reduceExpression(operatorLocationArray, numberArray, "/");
                        numberArray = algoResultArray[0];
                        operatorLocationArray = algoResultArray[1];
                        i += 1;
                        continue;
                    }

                }
                i = 0;
                while (operatorLocationArray.length > 0) {
                    if (i > operatorLocationArray.length - 1) {
                        i = 0;
                    }
                    if (operatorLocationArray[i][0] === "+") {
                        algoResultArray = reduceExpression(operatorLocationArray, numberArray, "+");
                        numberArray = algoResultArray[0];
                        operatorLocationArray = algoResultArray[1];
                        i += 1;
                        continue;
                    }
                    if (operatorLocationArray[i][0] === "-") {
                        algoResultArray = reduceExpression(operatorLocationArray, numberArray, "-");
                        numberArray = algoResultArray[0];
                        operatorLocationArray = algoResultArray[1];
                        i += 1;
                        continue;
                    }
                }


                // opCountArray = getOperatorCount(operatorLocationArray);
                // for(let i = 0; i < opCountArray[0]; i++) {
                //         algoResultArray = reduceExpression(operatorLocationArray, numberArray, "*");
                //         numberArray = algoResultArray[0];
                //         operatorLocationArray = algoResultArray[1];
                // }
                // for(let i = 0; i < opCountArray[1]; i++) {
                //     algoResultArray = reduceExpression(operatorLocationArray, numberArray, "/");
                //     numberArray = algoResultArray[0];
                //     operatorLocationArray = algoResultArray[1];
                // }
                // for(let i = 0; i < opCountArray[2]; i++) {
                //     algoResultArray = reduceExpression(operatorLocationArray, numberArray, "+");
                //     numberArray = algoResultArray[0];
                //     operatorLocationArray = algoResultArray[1];
                // }
                // for(let i = 0; i < opCountArray[3]; i++) {
                //     algoResultArray = reduceExpression(operatorLocationArray, numberArray, "-");
                //     numberArray = algoResultArray[0];
                //     operatorLocationArray = algoResultArray[1];
                // }
                setExpression(numberArray[0].toString());
            }
        } else if (x === ".") {
            let doubleDecimalFlag = false;
            let prevDecimalPlace = -1;
            for (let i = expression.length - 1; i > -1; i--) {
                if (expression[i] === ".") {
                    prevDecimalPlace = i;
                    break;
                }
            }
            if (prevDecimalPlace !== -1) {
                let counter = 0;
                for (let j = prevDecimalPlace + 1; j < expression.length; j++) {
                    if (expression[j] === "+" || expression[j] === "-" || expression[j] === "*" || expression[j] === "/") {
                        counter += 1;
                    }
                }
                if (counter === 0) {
                    doubleDecimalFlag = true;
                }
            }
            if (doubleDecimalFlag === true) {
                return;
            } else {
                setExpression(expression + x);
            }

        } else if (x === "+" || x === "-" || x === "*" || x === "/") {
            if (expression[expression.length - 1] === "+" || expression[expression.length - 1] === "-" || expression[expression.length - 1] === "*" || expression[expression.length - 1] === "/" || expression[expression.length - 1] === ".") {
                return;
            } else {
                setExpression(expression + x);
            }
        } else if (x === "0") {
            if (expression[expression.length - 1] === "/") {
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
