import React, { Component } from 'react';

class WebsocketSpan extends Component{
  constructor(props) {
	super(props);
	this.state = {
		value:this.props.value,
		buttonDisabled:false,
		total:0
	};
	this.connection = new WebSocket(this.props.connectTo);
	this.connection.onopen = this.onOpen.bind(this)
	this.connection.onmessage = this.onMessage.bind(this)
	this.toSend = null;
	this.totalLabel = null;
  }

	click = (e) => {
		this.sendMessage('sent a message')
	}

  

	sendMessage(message) {
		if (this.connection.readyState === 1) {
			this.connection.send(message);
			this.setState({buttonDisabled:true,value:'0'})
		} else {
			this.toSend = message;
		}
	}

	onOpen(){
		if (this.toSend !== null) {
			this.sendMessage(this.toSend);
			this.toSend = null;
		}

	}

	onMessage(msg){
		var message = JSON.parse(msg.data)
		if(message.hasOwnProperty('total')){
			this.setState({total:message.total})
		}
		
		if (message.value !== "finished"){
			this.setState({value:message.value})
		}else{
			this.setState({value:message.value,
						  buttonDisabled:false
						  })
		}
		
	}



  render() {
		if (this.state.value==='finished'){
			this.totalLabel = this.props.label + ' : ' + this.state.value
		}else{
			this.totalLabel = this.props.label + ' : ' + this.state.value + '/' + this.state.total
		}
		
		return(
      <div>
		  <span>
			  <button
				className="danger-button"		
				onClick={this.click}
				disabled={this.state.buttonDisabled}>
				<h2>{this.props.buttonText}</h2>
			  </button>
			<h2>
				{this.totalLabel}
			</h2>
		  </span>

      </div>        

		)
  }
}
export default WebsocketSpan


