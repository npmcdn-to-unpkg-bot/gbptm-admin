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
				body.features = body.features.slice(0,200) //for testing so as not to hammer the api
				for(var i = 0; i <= body.features.length; i++) {
				  (function(i,body){
					setTimeout(function(){

						if(i === body.features.length){
							ws.send(JSON.stringify({"value":"finished"}))
							console.log('finished')
						  }else{
							  if(i===0){
							  	ws.send(JSON.stringify({"value":i+1,"total":body.features.length}));
								console.log(i + 1);
								request('http://localhost:3002/loos/'+body.features[i]._id+'/updateArea',function(error,response,body){})

							  }else{
								  ws.send(JSON.stringify({"value":i+1}));
								  console.log(i + 1);
								  request('http://localhost:3002/loos/'+body.features[i]._id+'/updateArea',function(error,response,body){})
							  }
					      }

				  }, 2000 * i)
				 })(i,body);
				}
			}
		})
	})
});


	
module.exports = router
