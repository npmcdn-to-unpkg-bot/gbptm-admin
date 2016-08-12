import React, { Component } from 'react';
import Slider from './slider'


class StatisticsDisplay extends Component{
  render() {
	console.log(this.props.stats)
    var children = []   
    for (var property in this.props.stats.percentages) {
		console.log(property);
        if (this.props.stats.percentages.hasOwnProperty(property)) {
			var child = <Slider key={property} value={this.props.stats.percentages[property]} header={property}/>
			children.push(child)
        }
    }
    var root = React.createElement('div', {"className":"flexbox"},children);
    return root
  }
};
export default StatisticsDisplay
