import React, { Component } from 'react';
class Slider extends Component{
  render() {
		console.log(this.props.header,this.props.unknown,this.props.known)
		var spans = null
  		if (this.props.unknown === 0){
			spans = <span className="fakebar"><span style={{width:this.props.known+'%'}} className="fakebar_green"><h2>{this.props.known}%</h2></span></span>

		}else{
			spans = <span className="fakebar">
						<span style={{width:this.props.known+'%'}} className="fakebar_green"><h2>{this.props.known}%</h2></span>
						<span style={{width:this.props.unknown+'%'}} className="fakebar_orange"><h2>{this.props.unknown}%</h2></span>
						</span>
		}

		return(
			<div id="barchartdiv">
				<div className="barchart">
					<p>{this.props.header}</p>
					{spans}
				</div>
			</div>
		);
  }
}
export default Slider
