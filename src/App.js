import React, { useState, useEffect } from 'react';
import './CSS/App.css';
import Display from './Display';
import CalculatorPad from './CalculatorPad';

const App = () => {

    return (
        <div>
            <Display expression={} />
            <CalculatorPad expression={} update={} />
        </div>
    );
};

export default App;
