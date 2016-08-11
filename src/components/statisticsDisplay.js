import React, { Component } from 'react';
import IndividualStat from './individualStat'


class StatisticsDisplay extends Component{
  render() {

    var children = []   
    for (var property in this.props.stats) {
        if (this.props.stats.hasOwnProperty(property)) {
            if(typeof this.props.stats[property] === "number" || typeof this.props.stats[property] === "string" ){
					var child = <IndividualStat key={property} value={this.props.stats[property]} header={property}/>
                	children.push(child);
            }
        }
    }
    var root = React.createElement('div', {"className":"flexbox"},children);
    return root
  }
};
export default StatisticsDisplay
