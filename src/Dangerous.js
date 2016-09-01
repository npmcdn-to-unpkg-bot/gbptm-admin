import React, { Component } from 'react';
//import './App.css';
import SideBar from './components/sideBar'
import WebsocketResult from './components/websocketResult'
import config from './config'


class Dangerous extends Component {
  render() {
    return (
			<div id="mainContainer" className="container">
				<SideBar />
				<div id="main" className="col" >
					<div className='innerContainer'>
						<h1>Private Operations</h1>
						<div className='operationsContainer'>		
							<WebsocketResult value="0" buttonText='Click to update Area details on ALL loos' connectTo={'ws://'+config.backendAddress+'/updateArea'} label="Results Processed"/>
						</div>
					</div>
				</div>
			</div>

    );
  }
}



export default Dangerous;





