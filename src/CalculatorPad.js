import React, { useState, useEffect } from 'react';
import './CSS/CalculatorPad.css';
import PropTypes from 'prop-types';

const CalculatorPad = (props) => {
    return (
        <div className="grid">

        </div>
    );
};

CalculatorPad.propTypes = {
    expression: PropTypes.string.isRequired,
    update: PropTypes.func.isRequired
};

export default CalculatorPad;