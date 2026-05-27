import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

//Redux
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const root = createRoot( document.getElementById('root') );
root.render(
    <Provider store={ getStore() }>
        <App />
    </Provider>
);

function getStore(beginState = {}){
    return createStore(
        rootReducer,
        beginState,
        applyMiddleware(thunk)
    );
}
