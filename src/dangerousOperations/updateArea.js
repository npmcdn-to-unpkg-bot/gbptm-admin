var request = require('request')
var _ = require('lodash')

//gets list of loo ids
request('http://localhost:3002/loos', function (error, response, body) {
	if (!error && response.statusCode == 200) {
		body = JSON.parse(body)
		body.features = body.features.slice(0,10) //for testing so as not to hammer db
		console.log(body.features)
		
		_.forEach(body.features,function(looObject) {
			//queries API and updates areas		
			request('http://localhost:3002/loos/'+looObject._id+'/updateArea',function(error,response,body){
				console.log(body)
			})
		});
		
	}
})


