import * as React from 'react';
import { Router, Route } from 'dva/router';
import App from './App';

export default ({history}) => {
    return (
        <Router history={history}>
            <Route component={App} />
        </Router>
    );
};
