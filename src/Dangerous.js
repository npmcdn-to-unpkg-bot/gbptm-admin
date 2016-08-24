import React, { Component } from 'react';
//import './App.css';
import SideBar from './components/sideBar'
import DangerButton from './components/dangerButton'
import WebsocketSpan from './components/websocketSpan'



class Dangerous extends Component {
  constructor(props) {
	super(props);
	this.state = {updateAreaNumber:0};
  }

  test(){
	console.log("things got clicked")	
  }


  render() {
    return (
			<div id="mainContainer" className="container">
				<SideBar />
				<div id="main" className="col" >
					<h1>Dangerous Operations</h1>
					<DangerButton onClick={this.test} text="Updates area on ALL loos"/>
					<h2><WebsocketSpan value="this is loading" text='here be buttons'/></h2>
				</div>
			</div>

    );
  }
}



export default Dangerous;





