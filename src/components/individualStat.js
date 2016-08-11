import React, { Component } from 'react';
import pin from './img/pin.svg';
var loading = "loading"



class IndividualStat extends Component{
  render() {
		return(
		<div key={this.props.header} className="dataBox">
			<img src={pin} alt="databox"/>
			{this.props.value === '' ? <h2>loading</h2>:<h2>{this.props.value}</h2>}
			<p>{this.props.header}</p>
		</div>
		);
  }
}
export default IndividualStat
