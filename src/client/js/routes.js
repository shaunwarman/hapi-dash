import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import createHistory from 'history/lib/createHashHistory'

import Home from './home';

const historyOptions = {
    queryKey : false
};

const routes = (
    <Router history={createHistory(historyOptions)}>
        <Route path='/' component={ Home }>
        </Route>
    </Router>
);

export default routes;