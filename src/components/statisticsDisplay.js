import React, { Component } from 'react';
import IndividualStat from './individualStat'


class StatisticsDisplay extends Component{
  render() {
    var children = []   
    for (var property in this.props.stats.numbers) {
        if (this.props.stats.numbers.hasOwnProperty(property)) {
			var child = <IndividualStat key={property} value={this.props.stats.numbers[property]} header={property}/>
			children.push(child);

        }
    }
    var root = React.createElement('div', {"className":"flexbox","id":"statisticsDisplay"},children);
    return root
  }
};
export default StatisticsDisplay
