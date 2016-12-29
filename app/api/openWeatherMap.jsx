
const axios = require('axios');
			
const a = 4;

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=43a80028cf7fc1b34a515f437a0788b8';

module.exports = {

	getValue: function(){
		return a;
	},

	getTemp: function(location){
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
		console.log(requestUrl);
		return axios.get(requestUrl).then(function(res){
			if(res.data.cod && res.data.message){
				throw new Error(res.data.message);
			}else{
				return res.data.main.temp;
			}

		}, function(res){
			throw new Error(res.data.message);
		});

	}
}