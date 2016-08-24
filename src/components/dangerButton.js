import React, { Component } from 'react';

class DangerButton extends Component{
	click = (e) => {
		this.props.onClick();
	}

  render() {

	
    return (
      <div className="selector">
		  <span>
			  <button
				className="danger-button"		
				onClick={this.click}>
				<h2>{this.props.text}</h2>
			  </button>
		  </span>
      </div>        
    );
  }
};




export default DangerButton


