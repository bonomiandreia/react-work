import React from 'react';

import {
    BrowserRouter as Router,
    Route, Routes
  } from 'react-router-dom';

import { history } from './history';
import App from './pages/login/App';
import Posts from './pages/Posts/Posts';
import CreateAccount from './pages/CreateAccount/CreateAccount';


const RoutesApp = () => (
    <Router>
        <Routes history={history}>
            <Route exact path="/" element={<App />} />
            <Route exact path="/login" element={<App />} />
            <Route exact path="/posts" element={<Posts />} />
            <Route exact path="/create-account" element={<CreateAccount />} />
        </Routes>
    </Router>
)

export default RoutesApp;