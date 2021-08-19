import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser')
  worker.start({
    onUnhandledRequest: 'bypass'
  })
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
