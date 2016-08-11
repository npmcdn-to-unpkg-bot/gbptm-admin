var $ = require('jquery');
import React, { Component } from 'react';
//import IndividualStat from './individualStat'
import StatisticsDisplay from './statisticsDisplay'
import ChartArea from './chartArea'


class totalDisplay extends Component{
  constructor(props) {
	super(props);

	this.state = {
		stats: props.stats
	};
  }

  componentDidMount() {
    this.serverRequest = $.get(this.props.source, function (result) {
      this.setState({
        stats: result
      }); 
    }.bind(this));
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
		return(
			<div>	
				<div id="dataArea">
					<StatisticsDisplay stats={this.state.stats}/>
					<ChartArea/>
				</div>
				
			</div>
		)

  }
};
totalDisplay.PropTypes = {
	stats: React.PropTypes.object.isRequired
};
totalDisplay.defaultProps = {
      stats: {"Total Toilets Recorded":"","Toilets Active on Map":"","Inactive/Removed Toilets":"","Total Loo Reports Recorded":"","Total Reports via Web UI/API":"","Reports from Data Collections":"","Toilet Removal Reports":""
}};
export default totalDisplay
