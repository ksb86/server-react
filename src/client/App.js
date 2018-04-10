import React, { Component } from 'react';
import Counter from './components/Counter/Counter';
import Foo from './components/Foo/Foo';
import Bar from './components/Bar/Bar';

import './App.less';

class App extends Component {
    render() {
        return (
            <div>
                <h2>React rendering on Server and Client with Redux</h2>
                <ul style={{display: 'flex', flexWrap: 'wrap'}}>
                  {this.props.data.map(({ name, owner, stargazers_count, html_url }) => (
                    <li key={name} style={{margin: 30}}>
                      <ul>
                        <li><a href={html_url}>{name}</a></li>
                        <li>@{owner.login}</li>
                        <li>{stargazers_count} stars</li>
                      </ul>
                    </li>
                  ))}
                </ul>
                {/* <Counter /> */}
            </div>
        );
    };
};
export default App;
