import React, { Component } from 'react';
//import './App.css';
import TotalDisplay from './components/totalDisplay';



class App extends Component {
  render() {

    return (
			<div id="mainContainer" className="container">
				<div id="sidebar" className="col">
					<h1 className="sidebar-title">GBPTM Admin</h1>
					<div className="sidebar-item">
						<h2>Statistics</h2>
					</div>
					<div className="sidebar-item">
						<h2>Users</h2>
					</div>
					<div className="sidebar-item">
						<h2>Toilet Editor</h2>
					</div>
					<div className="sidebar-item">
						<h2>Config</h2>
					</div>
				</div>
				<div id="main" className="col" >
					<TotalDisplay source="http://localhost:3002/statistics"/>
				</div>
			</div>

    );
  }
}

export default App;





