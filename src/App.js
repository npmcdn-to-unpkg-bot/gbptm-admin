import React, { Component } from 'react';
import './App.css';
import sidebar from './components/img/sidebar.svg';
import TotalDisplay from './components/totalDisplay'



class App extends Component {
  render() {

    return (
		<div id="mainContainer" className="container">
			<div id="innerContainer">
				<div id="sidebar" className="col">
					<h1>Pages</h1>
					<div id="sb_flexbox"></div>
				</div>
				<div id="main" className="col" >
					<span className="topbar">
						<div id="sb_button">
							<img src={sidebar} className="sidebar-button" alt="logo" />
						</div>
						<h1>GBPTM Admin Panel</h1>
					</span>
					<TotalDisplay source="http://localhost:3002/statistics"/>
				</div>
			</div>
		</div>
    );
  }
}

export default App;





