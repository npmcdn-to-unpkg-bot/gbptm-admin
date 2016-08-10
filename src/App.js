import React, { Component } from 'react';
import './App.css';
import sidebar from './img/sidebar.svg';
import StatisticsDisplay from './statisticsDisplay'
//import Chart from 'react-d3-core';
//import LineChart from 'react-d3-core';


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
					<div id="dataArea">
						<StatisticsDisplay source="https://greatbritishpublictoiletmap.rca.ac.uk/statistics"/>

					</div>
				</div>
			</div>
		</div>
    );
  }
}

export default App;
