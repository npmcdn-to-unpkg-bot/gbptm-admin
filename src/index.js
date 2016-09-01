import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NoMatch from './noMatch';
import Dangerous from './Dangerous';
import Search from './Search'
import NameSearch from './NameSearch'
import AreaSearch from './AreaSearch'

import './css/index.css';

import { Router, Route, hashHistory} from 'react-router'

var history = hashHistory

ReactDOM.render((
  <Router history={history}>
	<Route path="/" component={App}/>
	<Route path="/private" component={Dangerous}/>
	<Route path="/search" component={Search}/>
	<Route path="/nameSearch" component={NameSearch}/>
	<Route path="/areaSearch" component={AreaSearch}/>
    <Route path="/*" component={NoMatch} />
  </Router>
), document.getElementById('root'))



