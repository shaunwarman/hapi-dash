import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import createHistory from 'history/lib/createHashHistory'

import Home from './home';
import LineChart from './charts/LineChart';

const historyOptions = {
    queryKey : false
};

const routes = (
    <Router history={createHistory(historyOptions)}>
        <Route path='/' component={ Home }>
            <Route path='linechart' component={ LineChart } />
        </Route>
    </Router>
);

export default routes;