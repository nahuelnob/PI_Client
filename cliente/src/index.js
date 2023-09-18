import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'

import axios from 'axios'
// axios.defaults.baseURL = 'http://localhost:3001'
// axios.defaults.baseURL = 'https://piserver-production.up.railway.app/'

import {Provider} from 'react-redux'
import store from './redux/store/store'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
