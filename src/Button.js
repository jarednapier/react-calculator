import React, { useState, useEffect } from 'react';
import './CSS/Button.css';
import PropTypes from 'prop-types';

const NumberButton = (props) => {
    const buttonStyle = {
        gridArea: props.id
    };

    return (
        <div style={buttonStyle}>
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