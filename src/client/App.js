import React from 'react';
import Counter from './components/Counter/Counter';

import './App.less';

const App = () => {
    return (
        <div>
            <h2>React rendering on Server and Client with Redux</h2>
            <Counter />
        </div>
    );
};
export default App;
