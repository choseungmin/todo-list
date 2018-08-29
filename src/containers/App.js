import React, { Component } from 'react';
import TodoList from '../components/TodoList';

import { connect } from 'react-redux';

class App extends Component {
    render() {
        return (
            <div className="App">
                <TodoList/>
            </div>
        )
    }
}

export default App;