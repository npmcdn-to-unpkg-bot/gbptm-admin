import React, { Component } from 'react';
import pin from './img/pin.svg';



class IndividualStat extends Component{
  render() {
		return(
		<div key={this.props.header} className="dataBox">
			<img src={pin} alt="databox"/>
			<h2>{this.props.value}</h2>
			<p>{this.props.header}</p>
		</div>
		);
  }
}
export default IndividualStat
