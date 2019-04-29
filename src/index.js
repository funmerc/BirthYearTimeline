import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Redux
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={ getStore() }>
        <App />
    </Provider>, 
    document.getElementById('root')
);

function getStore(beginState = {}){
    return createStore(
        rootReducer,
        beginState,
        applyMiddleware(thunk)
    );
}

serviceWorker.unregister();
