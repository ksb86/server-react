import express from 'express';
import bodyParser from 'body-parser';
import React from 'react';
import cors from "cors";
import tz from 'moment-timezone';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import {renderToString} from 'react-dom/server';
import App from './shared/App';
import Layout from './layout';
import { fetchPopularRepos } from './shared/api';
import { matchPath, StaticRouter } from 'react-router-dom'
import routes from './shared/routes';
// import reducers from './reducers';
// const store = createStore(reducers);

const port = (process.env.NODE_ENV === 'production') ? 80 : 3000;
const server = express();


server.use(cors());
server.use(express.static('dist/public'));

server.get('*', (req, res, next) => {
    const title = 'React Server Rendering';
    // create html string of app body to insert into html template

    const body = renderToString(
        // <Provider store={store}>
            <StaticRouter location={req.url}>
                <App />
            </StaticRouter>
        // </Provider>
    );
    const cssPath = (process.env.NODE_ENV === 'production' ? '/server-react.1.0.0.min.css' : '/styles.css');
    const jsPath = (process.env.NODE_ENV === 'production' ? '/server-react.1.0.0.min.js' : '/browser.js');
    res.send(
        Layout({
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
