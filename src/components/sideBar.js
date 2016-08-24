import React, { Component } from 'react';
import {Link} from 'react-router'


class SideBar extends Component{
  render() { 
	return (
	<div id="sidebar" className="col">
		<h1 className="sidebar-title">GBPTM Admin</h1>
		<Link to={`/`}>
			<div className="sidebar-item">
				<h2>Statistics</h2>
			</div>
		</Link>
		<Link to={`/dangerous`}>
			<div className="sidebar-item">
				<h2>Private</h2>
			</div>
		</Link>
		<div className="sidebar-item">
			<h2>Toilet Editor</h2>
		</div>
		<div className="sidebar-item">
			<h2>Config</h2>
		</div>
	</div>

  )}
};
export default SideBar

