import React from 'react';
import './CSS/Button.css';
import PropTypes from 'prop-types';

const NumberButton = (props) => {
    const buttonStyle = {
        gridArea: props.id,
        backgroundColor: props.id === "clear" ? "rgb(128,0,0)" : props.id === "add" || props.id === "subtract" || props.id === "multiply" || props.id === "divide" ? "rgb(169,169,169)" : props.id === "equals" ? "rgb(25,25,112)" :  "rgb(128,128,128)"
    };

    return (
        <div style={buttonStyle} className="button" onClick={() => {props.handler(props.title);}}>
            {props.title}
        </div>
    );
};

NumberButton.propTypes = {
    title: PropTypes.string.isRequired,
    handler: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
};

export default NumberButton;