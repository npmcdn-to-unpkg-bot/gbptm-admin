var $ = require('jquery');
import React, { Component } from 'react';
import StatisticsDisplay from './statisticsDisplay'
//import ChartArea from './chartArea'
import SliderDisplay from './sliderDisplay'
import Selector from './selector'
import DateSelector from './dateSelector'
import utils from './utils'




class totalDisplay extends Component{
  constructor(props) {
	super(props);
	var todaysDate = new Date();
	this.state = {
		stats: props.stats,
		query:{"timescale":"Overall","beginDate":"2000/1/1","endDate":utils.dateMaker({days:todaysDate.getDate(),months:todaysDate.getMonth()+1,years:todaysDate.getFullYear()})},
		disabled: {"beginDate":true,"endDate":true}
	};
  }


  componentDidMount() {
    this.serverRequest = $.get(this.props.source +utils.queryBuilder(this.state.query), function (result) {
      this.setState({
        stats: result
      }); 
    }.bind(this));
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }
  
  queryUpdater(field,value){
	var query = this.state.query;
	query[field]=value
	this.setState({query:query});

	if (this.state.query.timescale==="Custom"){
      this.setState({
		disabled: {"beginDate":false,"endDate":false}
      }); 
	}else{
	  var todaysDate = new Date();
	  var beginDate = new Date();
	  if (this.state.query.timescale ==="Year"){
	  	beginDate.setFullYear(beginDate.getFullYear()-1);
	  }
	  if (this.state.query.timescale ==="Month"){
	  	beginDate.setMonth(beginDate.getMonth()-1);
	  }
	  if (this.state.query.timescale ==="Week"){
	  	beginDate.setDate(beginDate.getDate()-7);
	  }
	  //overall is a little bit of a fudge because it all takes in reports that don't actually have time stamps...so having a begin date is a little misleading....
	  if (this.state.query.timescale ==="Overall"){
	  	beginDate.setDate(1);
	  	beginDate.setMonth(0);
	  	beginDate.setFullYear(2000);
	  }

	
		
	  beginDate = utils.dateMaker({days:beginDate.getDate(),months:beginDate.getMonth()+1,years:beginDate.getFullYear()})
	  todaysDate = utils.dateMaker({days:todaysDate.getDate(),months:todaysDate.getMonth()+1,years:todaysDate.getFullYear()})
	  query["beginDate"] = beginDate;
	  query["endDate"] = todaysDate;
	  console.log(this.state.query.timescale)
	  console.log('begin',beginDate)	
	  console.log('endDate',todaysDate)

	  
      this.setState({
		disabled: {"beginDate":true,"endDate":true},
		query:query
      }); 
	}

    this.serverRequest = $.get(this.props.source + utils.queryBuilder(this.state.query), function (result) {
      this.setState({
        stats: result
      }); 
    }.bind(this));
  }	


  
  render() {

		return(
			<div id="dataArea">
				<div className="flexbox" id="optionsSelector">
					<Selector field="timescale" label="Timescale" handleChange={this.queryUpdater.bind(this)} value="Overall" options={["Overall","Year","Month","Week","Custom"]} />
					<DateSelector disabled={this.state.disabled.beginDate} field="beginDate" label="Begin date" handleChange={this.queryUpdater.bind(this)} value="1" date={this.state.query.beginDate}  />
					<DateSelector disabled={this.state.disabled.endDate} field="endDate" label="End date" handleChange={this.queryUpdater.bind(this)} value="1" date={this.state.query.endDate}/>



				</div>
				<StatisticsDisplay stats={this.state.stats}/>
				{/*<ChartArea/>*/}
				<SliderDisplay stats={this.state.stats}/>
			</div>
		)

  }
};
totalDisplay.PropTypes = {
	stats: React.PropTypes.object.isRequired
};
totalDisplay.defaultProps = {
      stats: {
				"numbers":{
					"somenumber" :""

				},
				"percentages":{
					"somepercentage":""
				}
			}
};
export default totalDisplay
