import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import configureStore from './store';
import 'antd/dist/antd.css'; // css ant design

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import AdminDashBoard from './components/Admin/Dashboard/index';
import AdminLogin from './components/Admin/AdminLogin/index';
import RouterLink from './RouterLink/index';


ReactDOM.render(
    <Provider store={configureStore()}>
        {/* <App /> */}
        <Router>
            <Switch>
                {/* route admin */}
                <Route path="/admin" component={AdminDashBoard} />
                <Route path="/adminlogin" component={AdminLogin} />
                <Route path="/home" component={App} />
                {/* route client */}
                <Route path="/" component={App} />
            </Switch>
        </Router>
    </Provider >,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
