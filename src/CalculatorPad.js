import React from 'react';
import './CSS/CalculatorPad.css';
import { buttonNames } from './Utilities';
import PropTypes from 'prop-types';
import Button from './Button';

const CalculatorPad = (props) => {
    let buttonArray = [];
    for(let item in buttonNames) {
        buttonArray.push(
            <Button key={item} id={item} title={buttonNames[item]} handler={(e)=> {props.update(e)}}/>
        );
    }

    return (
        <div className="grid">
            {buttonArray}
        </div>
    );
};

CalculatorPad.propTypes = {
    expression: PropTypes.string.isRequired,
    update: PropTypes.func.isRequired
};

export default CalculatorPad;