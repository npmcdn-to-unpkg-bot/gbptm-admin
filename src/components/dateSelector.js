import React, { Component } from 'react';
import _ from 'lodash'
import utils from './utils'


class MultiSelector extends Component{
  constructor(props) {
	super(props);
	this.state = {
		date: {days:this.props.date.split('/')[2],months:this.props.date.split('/')[1],years:this.props.date.split('/')[0]},
		disabled: this.props.disabled
	};
  }

	handleChange = (e) => {
		var date = this.state.date
		date[e.target.name] = e.target.value;
		this.setState({date:date});
		this.props.handleChange(this.props.field,utils.dateMaker(this.state.date));
	}

  render() {
	this.state = {
		date: {days:this.props.date.split('/')[2],months:this.props.date.split('/')[1],years:this.props.date.split('/')[0]},
		disabled: this.props.disabled
	};

	var numberOfDaysInMonth = {
		1:31,
		2:28,
		3:31,
		4:30,
		5:31,
		6:30,
		7:31,
		8:31,
		9:30,
		10:31,
		11:30,
		12:31
	}
	var year = parseInt(this.state.date.years,10)
	if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)){
	//if (((year % 4 === 0) && (year % 100 !== 0)) || ((year % 4 === 0) && (year % 100 === 0) && (year % 400 === 0))){
		numberOfDaysInMonth[2] = 29;
	}

	var days = _.range(1,numberOfDaysInMonth[parseInt(this.state.date.months,10)]+1)
	var months = _.range(1,13)
	var years = _.range(2000,3000)
    return (
      <div className="selector">
		  <h2>{this.props.label}:
			  <span>
				  <select 
					disabled={this.state.disabled}
					className="selectorDropDown"		
					name="days"
					value={this.state.date.days}
					onChange={this.handleChange}>
						{days.map(function(object, i){
							return <option value={object}>{object}</option>;
						})}
				  </select>
				  <select 
					disabled={this.state.disabled}
					className="selectorDropDown"		
					name="months"
					value={this.state.date.months}
					onChange={this.handleChange}>
						{months.map(function(object, i){
							return <option value={object}>{object}</option>;
						})}
				  </select>
				  <select 
					disabled={this.state.disabled}
					className="selectorDropDown"		
					name="years"
					value={this.state.date.years}
					onChange={this.handleChange}>
						{years.map(function(object, i){
							return <option value={object}>{object}</option>;
						})}
				  </select>
			  </span>
		  </h2>
      </div>        


    );
  }
};




export default MultiSelector


