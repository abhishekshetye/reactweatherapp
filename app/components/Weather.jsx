var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({


	getInitialState: function(){
		return{
			isLoading: false
		}
	},


	handleSearch: function(location){
		var that = this;

		this.setState({
			isLoading: true
		});

		console.log('here', openWeatherMap.getValue());
		
		openWeatherMap.getTemp(location).then(function(temp){
			that.setState({
				location: location,
				temp : temp,
				isLoading: false
			});
		}, function(err){
			alert(err);
			that.setState({
				isLoading: false
			});
		});
	},	

	handleExamples: function(){

	},

	render: function(){

		var {isLoading, temp, location } = this.state;
		
		/*	

		var value = this.props.location.query.location;

		if(value != undefined){
			this.props.location.query.location = undefined;
			this.handleSearch(value);
		}

		*/
		function renderMessage(){

			if(isLoading){
				return <h3 className="text-center">Fetching data.. </h3>;
			}else if (temp && location) {
				return 	<WeatherMessage loc={location} temp={temp} />;
			}

		}

		return (
			<div>
				<h2 className="text-center"> Weather </h2>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
			</div>
			);

	}

});

module.exports = Weather;