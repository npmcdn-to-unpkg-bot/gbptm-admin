import React, { Component } from 'react';

class WebsocketSpan extends Component{
  constructor(props) {
	super(props);
	this.state = {
		value:this.props.value
	};
	this.connection = new WebSocket('ws://localhost:3003/updateArea');
	this.connection.onopen = this.onOpen.bind(this)
	this.connection.onmessage = this.onMessage.bind(this)
	this.toSend = null;
  }

	click = (e) => {
		this.sendMessage('sent a message')
	}

  

	sendMessage(message) {
		if (this.connection.readyState === 1) {
			this.connection.send(message);
		} else {
			this.toSend = message;
		}
	}

	onOpen(){
		console.log('onOpen')
		console.log(this)
		if (this.toSend !== null) {
			this.sendMessage(this.toSend);
			this.toSend = null;
		}

	}

	onMessage(msg){
		console.log('onMessage')
		console.log(msg.data)
      	this.setState({value:msg.data})

		
	}



  render() {
		return(
      <div className="selector">
		  <span>
			  <button
				className="danger-button"		
				onClick={this.click}>
				<h2>{this.props.text}</h2>
			  </button>
		  </span>
			<h2>
				{this.state.value}
			</h2>

      </div>        

		)
  }
}
export default WebsocketSpan


