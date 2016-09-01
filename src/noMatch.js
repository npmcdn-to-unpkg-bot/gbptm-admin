import React, { Component } from 'react';



class NoMatch extends Component {
  render() {
	console.log(this.props.location)
    return (
			<div id="mainContainer" className="container">
				<h1>404 not found</h1>
			</div>

    );
  }
}

export default NoMatch;





