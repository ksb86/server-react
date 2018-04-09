import express from 'express';
import bodyParser from 'body-parser';
import React from 'react';
import tz from 'moment-timezone';
import { createStore } from 'redux'
import {Provider} from 'react-redux';
import {renderToString} from 'react-dom/server';
import reducers from './client/reducers'
import App from './client/App';
import Html from './client/Html';
const store = createStore(reducers);

const port = (process.env.NODE_ENV === 'production') ? 80 : 3000;
const server = express();

server.use(express.static('dist/public'));

server.get('/', (req, res) => {

    const title = 'React Server Rendering';
    // create html string of app body to insert into html template
    const body = renderToString(
        <Provider store={store}>
            <App/>
        </Provider>
    );
    const cssPath = (process.env.NODE_ENV === 'production' ? './server-react.1.0.0.min.css' : './styles.css');
    const jsPath = (process.env.NODE_ENV === 'production' ? './server-react.1.0.0.min.js' : './client.js');
    res.send(
        Html({
            title,
            body,
            cssPath,
            jsPath
        })
    );
});

server.listen(port, function() {
    console.log(`Listening on port ${port} @ ${tz().tz('America/Boise').format('MMM DD, YYYY - hh:mm:ssa')} (mt)`);
});
