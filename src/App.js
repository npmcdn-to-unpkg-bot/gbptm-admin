import React, { Component } from 'react';
//import './App.css';
import TotalDisplay from './components/totalDisplay';
import SideBar from './components/sideBar'
import config from './config'


class App extends Component {
  render() {
    return (
			<div id="mainContainer" className="container">
				<SideBar />
				<div id="main" className="col" >
					<TotalDisplay source={"http://"+config.gbptmAddress}/>
					<div id="footer">Icons made by <a href="http://www.flaticon.com/authors/plainicon" title="Plainicon">Plainicon</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

				</div>
			</div>

    );
  }
}

export default App;





