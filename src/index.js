import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import Provider from react-redux and wrap it around App to make reducers accessible to all components
import { Provider } from 'react-redux';
// Import the store we created with the reducers, and set it as a prop of the provider
import { store } from './Store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
