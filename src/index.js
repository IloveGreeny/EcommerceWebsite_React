import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
//You can use React.StrictMode
  <App />,
  
  document.getElementById('root')
);


serviceWorker.unregister();
