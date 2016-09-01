var utils = {

	capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	},

	queryBuilder(base,page,queryJson){
		var queryString = base + "/"+ page + '?'
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

