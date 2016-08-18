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
	this.state = {
		stats: props.stats,
		query:{"timescale":"Overall","beginDate":"2000/1/1","endDate":"2001/1/1"},
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
	console.log('mode',this.state.query.timescale)
	this.setState({query:query});

	if (this.state.query.timescale==="Custom"){
      this.setState({
		disabled: {"beginDate":false,"endDate":false}
      }); 
	}else{
      this.setState({
		disabled: {"beginDate":true,"endDate":true}
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
					"Total Toilets Recorded":"",
					"Toilets Active on Map":"",
					"Inactive/Removed Toilets":"",
					"Total Loo Reports Recorded":"",
					"Total Reports via Web UI/API":"",
					"Reports from Data Collections":"",
					"Toilet Removal Reports":"",
					"Loos with Mutiple Reports": ""

				},
				"percentages":{
					"somepercentage":""
				}
			}
};
export default totalDisplay
