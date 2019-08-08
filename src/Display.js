import React, { useState, useEffect } from 'react';
import './CSS/Display.css';
import PropTypes from 'prop-types';

const Display = (props) => {
    return (
        <div id="display">
            {props.expression}
        </div>
    );
};

Display.propTypes = {
    expression: PropTypes.string.isRequired
};

export default Display;