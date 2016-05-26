import React from 'react';
import { render } from 'react-dom';

import Home from './Home'

const rootElement = document.getElementById('app');

render(
    <Home />,
    rootElement
);