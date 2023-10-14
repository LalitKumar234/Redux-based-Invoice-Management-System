import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={window.location.pathname || ''}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,

  document.getElementById('root')
);
reportWebVitals();
