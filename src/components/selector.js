import React, { Component } from 'react';

class Selector extends Component{
  constructor(props) {
	super(props);
	this.state = {
		value: props.value,
	};
  }

	handleChange = (e) => {
		this.setState({value:e.target.value});
		this.props.handleChange(this.props.field,e.target.value);
	}

  render() {

	
    return (
      <div className="selector">
		  <h2>{this.props.label}:
			  <select 
				className="selectorDropDown"		
				value={this.state.value} 
				onChange={this.handleChange}>
					{this.props.options.map(function(object, i){
						return <option value={object}>{object}</option>;
					})}
			  </select>
		  </h2>
      </div>        
    );
  }
};




export default Selector


