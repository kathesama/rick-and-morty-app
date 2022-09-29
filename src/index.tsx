import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './locale/i18n';
import store from './redux/store';

const persistor = persistStore(store);
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="container">
          <App />
        </div>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

/* If you want to start measuring performance in your app, pass a function
   to log results (for example: reportWebVitals(console.log))
   or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals */
reportWebVitals();
