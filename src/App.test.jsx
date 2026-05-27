import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import rootReducer from './reducers/rootReducer';

it('renders without crashing', () => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  root.render(
    <Provider store={createStore(rootReducer)}>
      <App />
    </Provider>
  );
  root.unmount();
  document.body.removeChild(container);
});
