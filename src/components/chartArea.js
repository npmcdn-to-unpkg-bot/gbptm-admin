import React, { Component } from 'react';
import TidiedBarChart from './tidiedBarChart'

class ChartArea extends Component{
  render() {
			var dataTest=[{"user":"a","numberOfReports":70},{"user":"b","numberOfReports":100},{"user":"c","numberOfReports":5}] 
			return(
				<div className="flexbox">
					<TidiedBarChart xLabel="User" yLabel="Number of Reports" data={dataTest} y="numberOfReports" x="user"  className="dataBox"/>
				</div>
			)
  }
};
export default ChartArea

