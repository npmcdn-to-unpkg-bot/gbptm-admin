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
					{(this.state.stats[Object.keys(this.state.stats)[0]] === 'loading' ? <ChartArea/> : '')}
				</div>
				
			</div>
		)

  }
};
totalDisplay.PropTypes = {
	stats: React.PropTypes.object.isRequired
};
totalDisplay.defaultProps = {
      stats: {"Total Toilets Recorded":"loading","Toilets Active on Map":"loading","Inactive/Removed Toilets":"loading","Total Loo Reports Recorded":"loading","Total Reports via Web UI/API":"loading","Reports from Data Collections":"loading","Toilet Removal Reports":"loading"
}};
export default totalDisplay
