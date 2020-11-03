// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';

// == Import : local
// Composants
import App from './containers/App';
// Store
import store from './store';

const rootReactElement = (
  <Provider store={store}>
    <Router>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Router>
  </Provider>
);

const target = document.getElementById('root');

render(rootReactElement, target);
