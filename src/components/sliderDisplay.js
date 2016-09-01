import React, { Component } from 'react';
import Slider from './slider'


class SliderDisplay extends Component{

  render() {
    var children = []   
    for (var property in this.props.stats.percentages) {
        if (this.props.stats.percentages.hasOwnProperty(property)) {
			var child = <Slider key={property} unknown={this.props.stats.percentages[property][1]}  known={this.props.stats.percentages[property][0]} header={property}/>
			children.push(child)
        }
    }
    var root = React.createElement('div', {"className":"flexbox","id":"sliderDisplay"},children);
    return root
  }
};
export default SliderDisplay
