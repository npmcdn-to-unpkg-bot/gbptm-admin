import React, { Component } from 'react';
//import './App.css';
import TotalDisplay from './components/totalDisplay';
import SideBar from './components/sideBar'



class App extends Component {
  render() {
    return (
			<div id="mainContainer" className="container">
				<SideBar />
				<div id="main" className="col" >
					<TotalDisplay source="http://localhost:3002/statistics"/>
				</div>
			</div>

    );
  }
}

export default App;





