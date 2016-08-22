var utils = {

	queryBuilder(queryJson){
		var queryString = '?'
		var counter = 0;
		for(var index in queryJson) { 
			if(queryJson.hasOwnProperty(index)){
				var attr = queryJson[index]; 
				if (counter ===0){
					queryString = queryString + index + "=" + attr
				}else{
					queryString =  queryString +'&'+ index + "=" + attr
				}
				counter +=1
			}
		}
		return queryString
	},

	dateMaker(dateObject){ // {days:1-31, months:1-12, year: 4digits}
		var result = dateObject.years + '/' + dateObject.months + '/' + dateObject.days
		return result
	}
}

export default utils

