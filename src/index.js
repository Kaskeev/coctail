import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Coctail from './Coctail'
import * as serviceWorker from './serviceWorker';
import {Router, Route} from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import Ingridient from './Ingridient';

const history = createBrowserHistory()

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
        <Route path = '/' component={App} exact/>
        <Route path = '/coctail/:name' component={Coctail}  exact/>
        <Route path = '/ingridient/:ing' component={Ingridient}  exact/>
    </Router>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
