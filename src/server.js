import express from 'express';
import bodyParser from 'body-parser';
import React from 'react';
import { createStore } from 'redux'
import {Provider} from 'react-redux';
import {renderToString} from 'react-dom/server';
import reducers from './client/reducers'
import App from './client/App';
import Html from './client/Html';
const store = createStore(reducers);

const port = 3000;
const server = express();

server.use(express.static('dist/public'));

server.get('/', (req, res) => {

    const title = 'Server side Rendering';
    // create html string of app body to insert into html template
    const body = renderToString(
        <Provider store={store}>
            <App/>
        </Provider>
    );

    res.send(
        Html({
            title,
            body
        })
    );
});

server.listen(port);
console.log(`Serving at http://localhost:${port}`);
