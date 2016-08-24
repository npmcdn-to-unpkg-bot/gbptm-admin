var express = require('express');
var router = express.Router();
var request = require('request')


router.ws('/updateArea', function(ws,req) {
	console.log('got connection')
	ws.on('message',function(msg){
		request('http://localhost:3002/loos', function (error, response, body) {
			if (!error && response.statusCode == 200) {
				body = JSON.parse(body)
				//safety catch
				body.features = body.features.slice(1000,1003) //for testing so as not to hammer the api
				for(var i = 0; i < body.features.length; i++) {
				  (function(i){
					setTimeout(function(){
					  ws.send(i.toString());
					  console.log(i);
					  request('http://localhost:3002/loos/'+body.features[i]._id+'/updateArea',function(error,response,body){
					  })

				  }, 2000 * i)
				 })(i);
				}
			}
		})
	})
});


	
module.exports = router
