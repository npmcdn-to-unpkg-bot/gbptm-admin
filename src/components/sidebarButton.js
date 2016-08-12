import React, { Component } from 'react';
import sidebar from './img/sidebar.svg';


class sidebarButton extends Component{
constructor() {
    super();
    this.state = {
      open: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
	console.log('changed state')
    this.setState({open: !this.state.open});
  }

  render() {
		return(
			<div id="sb_button" onClick={this.handleClick}>
				<img src={sidebar} className="sidebar-button" alt="logo" />
			</div>
		);
  }
}
export default sidebarButton
