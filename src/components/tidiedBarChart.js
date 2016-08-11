import React, { Component } from 'react';
var d3= require('d3')
var Chart=require('react-d3-core').Chart;
var BarChart=require('react-d3-basic').BarChart;




class TidiedBarGraph extends Component{
  render() {

	  var xAxis = this.props.x;
	  var yAxis = this.props.y;
	  var generalChartData=this.props.data
	  var width=700,
		height=350,
		margins = {left: 100, right: 100, top: 50, bottom: 50},
		id="test-chart",
		title="Bar Chart",
		svgClassName="test-chart-class",
		titleClassName="test-chart-title-class",
		legendClassName="test-legend",
		legendPosition="right",
		showLegend=false,
		showXAxis=true,
		showYAxis=true,
		chartSeries=[
		  {
			field: this.props.y
		  }
		],
		showXGrid=false,
		showYGrid=false,
		x=function(d) {
		  return d[xAxis];
		},
		xOrient='bottom',
		xTickOrient='bottom',
		xDomain=generalChartData.map(function(d) { return d[xAxis]; }),
		xRangeRoundBands={interval: [0, width - margins.left - margins.right], padding: .1},
		xScale='ordinal',
		xAxisClassName='x-axis',
		xLabel=this.props.xLabel,
		xLabelPosition='bottom',
		y=function(d) {
		  return +d;
		},
		yOrient='left',
		yTickOrient='right',
		yRange=[height - margins.top - margins.bottom, 0],
		yDomain=[0, +d3.max(generalChartData, function(d) { return d[yAxis]; })],
		yScale='linear',
		yAxisClassName='y-axis',
		yLabel=this.props.yLabel,
		yTicks=[1],
		yLabelPosition='left';


		return(
					<Chart
					  title={title}
					  id={id}
					  width={width}
					  height={height}
					  >
					  <BarChart
						title={title}
						data={generalChartData}
						width={width}
						height={height}
						id={id}
						margins={margins}
						svgClassName={svgClassName}
						titleClassName={titleClassName}
						yAxisClassName={yAxisClassName}
						xAxisClassName={xAxisClassName}
						legendClassName={legendClassName}
						legendPosition={legendPosition}
						categoricalColors={d3.scale.category10()}
						chartSeries={chartSeries}
						showLegend={showLegend}
						showXAxis={showXAxis}
						showYAxis={showYAxis}
						showXGrid={showXGrid}
						showYGrid={showYGrid}
						x={x}
						xDomain={xDomain}
						xRangeRoundBands={xRangeRoundBands}
						xScale={xScale}
						xOrient={xOrient}
						xTickOrient={xTickOrient}
						xLabel={xLabel}
						xLabelPosition={xLabelPosition}
						y={y}
						yOrient={yOrient}
						yRange={yRange}
						yDomain={yDomain}
						yScale={yScale}
						yTickOrient={yTickOrient}
						yTicks={yTicks}
						yLabel={yLabel}
						yLabelPosition={yLabelPosition}
					  />
					</Chart>
		);
  }
}
export default TidiedBarGraph
