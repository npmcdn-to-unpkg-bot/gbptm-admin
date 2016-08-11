var $ = require('jquery');
import React, { Component } from 'react';
import IndividualStat from './individualStat'


class StatisticsDisplay extends Component{
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


    var children = []   
    for (var property in this.state.stats) {
        if (this.state.stats.hasOwnProperty(property)) {
            if(typeof this.state.stats[property] === "number"){
					var child = <IndividualStat key={property} value={this.state.stats[property]} header={property}/>
                	children.push(child);
            }
        }
    }
    var root = React.createElement('div', {"className":"flexbox"},children);
    return root
  }
};
StatisticsDisplay.PropTypes = {
	stats: React.PropTypes.object.isRequired
};
StatisticsDisplay.defaultProps = {
      stats: {"Total Toilets Recorded":"","Toilets Active on Map":"","Inactive/Removed Toilets":"","Total Loo Reports Recorded":"","Total Reports via Web UI/API":"","Reports from Data Collections":"","Toilet Removal Reports":""
}};
export default StatisticsDisplay
