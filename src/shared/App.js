import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import routes from './routes'
import Grid from './Grid'
import NavBar from './NavBar'
import NoMatch from './NoMatch'
// import Counter from './Counter';
// import Home from './Home';

import '../less/App.less';

class App extends Component {
    render() {
        return (<div>
            <NavBar />
            <Switch>
                {routes.map(({
                    path,
                    exact,
                    component: C,
                    ...rest
                }) => (<Route key={path} path={path} exact={exact} render={(props) => (<C {...props} {...rest}/>)}/>))}
                <Route render={(props) => <NoMatch {...props} />} />
            </Switch>

            {/* <Counter /> */}
        </div>);
    }
};

export default App;
