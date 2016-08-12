import React, { Component } from 'react';
//import './App.css';
import TotalDisplay from './components/totalDisplay';
import SidebarButton from './components/sidebarButton';



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
						<SidebarButton/>
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





