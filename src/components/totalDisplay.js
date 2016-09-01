var $ = require('jquery');
import React, { Component } from 'react';
import StatisticsDisplay from './statisticsDisplay'
//import ChartArea from './chartArea'
import SliderDisplay from './sliderDisplay'
import Selector from './selector'
import DateSelector from './dateSelector'
import utils from './utils'
import config from '../config'




class totalDisplay extends Component{
  constructor(props) {
	super(props);
	var todaysDate = new Date();
	this.state = {
		stats: props.stats,
		query:{"timescale":"Overall",
			   "beginDate":"2000/1/1",
			   "endDate":utils.dateMaker({days:todaysDate.getDate(),months:todaysDate.getMonth()+1,years:todaysDate.getFullYear()}),
				"area":"All",
				"areaType":"All"
		},
		disabled: {
					"beginDate":true,
					"endDate":true
				},
		areaData:{},
		areaTypeList:[],
		areaList:[]
	};
  }




  componentDidMount() {

	//gets list of areas and area Types to use in the area dropdowns
    this.getAreaList = $.get(utils.queryBuilder("http://"+config.gbptmAddress,"statistics",{"areaList":true}), function (result) {
      this.setState({
        areaData: result.data,
		areaTypeList: result.areaTypes,
		areaList:result.data[result.areaTypes[0]]
      }); 
    }.bind(this));



	//Gets stats about the database applying default queries
    this.getStatistics = $.get(utils.queryBuilder("http://"+config.gbptmAddress,"statistics",this.state.query), function (result) {
      this.setState({
        stats: result,
      }); 
    }.bind(this));


  }

  componentWillUnmount() {
	if(this.serverRequest){
    	this.serverRequest.abort();
	}
  }
  
  //Called everytime a dropdown is changed so as to change the query sent to statistics
  queryUpdater(field,value){
	
	//handles vanilla drop downs
	var query = this.state.query;
	query[field]=value
	//this adds the new value to the query for manipulation later
	this.setState({query:query})



	//whether disabled or not
	var pickDateDisabled = this.state.disabled.beginDate
	//sets timescales within the queries, these are always sent	
	if (this.state.query.timescale==="Custom"){
		pickDateDisabled = false;
	}else{
	  pickDateDisabled = true
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
	  if (this.state.query.timescale ==="Overall"){
	  	beginDate.setDate(1);
	  	beginDate.setMonth(0);
	  	beginDate.setFullYear(2000);
	  }

	  //amalgamates the fields into a single string that can be read by the server as opposed to using UTC timestamp, since date is ONLY needed not time
	  beginDate = utils.dateMaker({days:beginDate.getDate(),months:beginDate.getMonth()+1,years:beginDate.getFullYear()})
	  todaysDate = utils.dateMaker({days:todaysDate.getDate(),months:todaysDate.getMonth()+1,years:todaysDate.getFullYear()})
	  query["beginDate"] = beginDate;
	  query["endDate"] = todaysDate;

	}

      this.setState({
		disabled: {"beginDate":pickDateDisabled,"endDate":pickDateDisabled},
		query:query,
		areaList: this.state.areaData[this.state.query.areaType]
      }); 

    this.serverRequest = $.get(utils.queryBuilder("http://"+config.gbptmAddress  ,"statistics",this.state.query), function (result) {
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
					<Selector field="areaType" label="Area Type" handleChange={this.queryUpdater.bind(this)}  options={this.state.areaTypeList} />

					<Selector field="area" label="Area" handleChange={this.queryUpdater.bind(this)}  options={this.state.areaList} />




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
