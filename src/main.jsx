import React from 'react';
import ReactDOM from 'react-dom/client'; // createRoot를 사용하기 위해 변경
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

// ReactDOM.render 대신 createRoot 사용
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
