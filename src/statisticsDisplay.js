var $ = require('jquery');
import React, { Component } from 'react';

import pin from './img/pin.svg';




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
                var image = React.createElement('img',{"src":pin},null);        
                var h2 = React.createElement('h2',null,this.state.stats[property]);
                var p = React.createElement('p',null,property);
                var child = React.createElement('div', {"key":property,"className":"dataBox"},[image,h2,p]);
                children.push(child);
            }
        }
    }
    var root = React.createElement('div', {"id":"flexbox"},children);
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
