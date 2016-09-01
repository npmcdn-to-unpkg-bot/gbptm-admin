import React, { Component } from 'react';

import dataReports from './img/data-reports.svg'
import pin from './img/pin.svg';
import removalReports from './img/removal-reports.svg';
import removed from './img/removed.svg';
import total from './img/total.svg';
import ui from './img/ui-reports.svg';





class IndividualStat extends Component{
  constructor(props) {
	super(props);
	
	this.headerToImg = {
		"Total Toilets Added":total,
		"Active Toilets Added":pin,
		"Inactive/Removed Toilets":removed,
		"Total Loo Reports Recorded":total,
		"Total Reports via Web UI/API":ui,
		"Reports from Data Collections":ui,
		"Removal Reports Submitted":removalReports,
		"Loos with Multiple Reports":dataReports
	}
	
	
  }

	
  render() {
		return(
		<div key={this.props.header} className="dataBox">
			<img src={this.headerToImg[this.props.header]} alt="databox"/>
			{this.props.value === '' ? <h2>loading</h2>:<h2>{this.props.value}</h2>}
			<p>{this.props.header}</p>
		</div>
		);
  }
}
export default IndividualStat
