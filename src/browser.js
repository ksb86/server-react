import React from 'react';
import {hydrate} from 'react-dom';
// import {createStore} from 'redux'
// import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom'
import App from './shared/App';
// import reducers from './reducers'
// const store = createStore(reducers)

hydrate(
// <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>,
// </Provider>,
document.getElementById('root'));
