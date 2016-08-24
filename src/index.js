import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NoMatch from './noMatch';
import Dangerous from './Dangerous';

import './css/index.css';
import { Router, Route, browserHistory} from 'react-router'


//this is slightly wonky in electron atm...ie it doesnt appear that / is actually the home page...
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/dangerous" component={Dangerous}/>
    <Route path="/*" component={NoMatch}/>
  </Router>
), document.getElementById('root'))



