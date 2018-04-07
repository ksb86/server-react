import React from 'react';
import {hydrate} from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux';
import reducers from './reducers'

const store = createStore(reducers)
import App from './App';

hydrate(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
