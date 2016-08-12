var $ = require('jquery');
import React, { Component } from 'react';
import StatisticsDisplay from './statisticsDisplay'
//import ChartArea from './chartArea'
import SliderDisplay from './sliderDisplay'


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
					{/*<ChartArea/>*/}
					<SliderDisplay stats={this.state.stats}/>
				</div>
				
			</div>
		)

  }
};
totalDisplay.PropTypes = {
	stats: React.PropTypes.object.isRequired
};
totalDisplay.defaultProps = {
      stats: {
				"numbers":{
					"Total Toilets Recorded":"",
					"Toilets Active on Map":"",
					"Inactive/Removed Toilets":"",
					"Total Loo Reports Recorded":"",
					"Total Reports via Web UI/API":"",
					"Reports from Data Collections":"",
					"Toilet Removal Reports":"",
					"Loos with Mutiple Reports": ""

				},
				"percentages":{
					"somepercentage":""
				}
			}
};
export default totalDisplay
