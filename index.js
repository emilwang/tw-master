import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import App from './components/App';
import {Provider} from 'react-redux';
import store from './store/index';
import {Router} from 'react-router';

render(
    <Provider store={store} >
        <App />
    </Provider>
,document.getElementById('root'));