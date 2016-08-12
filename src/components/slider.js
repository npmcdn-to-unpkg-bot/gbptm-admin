import React, { Component } from 'react';
class Slider extends Component{
  render() {
		return(
			<div id="barchartdiv">
				<div className="barchart">
					<p>{this.props.header}</p>
					<span className="fakebar">
						<h2>{this.props.value}%</h2>
						<span style={{width:this.props.value+'%'}} className="fakebar_green"></span>
					</span>
				</div>
			</div>
		);
  }
}
export default Slider
