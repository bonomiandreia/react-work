import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/login/App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom';
import Posts from './pages/Posts/Posts.lazy';
import CreateAccount from './pages/CreateAccount/CreateAccount.lazy';



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/login" element={<App />} />
        <Route exact path="/posts" element={<Posts />} />
        <Route exact path="/create-account" element={<CreateAccount />} />
      </Routes>
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
