import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//redux
import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';

//store
const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);

