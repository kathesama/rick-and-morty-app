import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';

import Application from './Application';
import reportWebVitals from './reportWebVitals';
import apolloClient from './graphql';
import store from './redux/store';
import './locale/i18n';
import './utilities/fontawesome';

import './index.css';

const persistor = persistStore(store);
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container as HTMLElement);

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ApolloProvider client={apolloClient}>
        <div className="container">
          <Application />
        </div>
      </ApolloProvider>
    </PersistGate>
  </Provider>
);

/* If you want to start measuring performance in your app, pass a function
   to log results (for example: reportWebVitals(console.log))
   or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals */
reportWebVitals();
