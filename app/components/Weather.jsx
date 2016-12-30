var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({


	getInitialState: function(){
		return{
			isLoading: false
		}
	},


	handleSearch: function(location){
		var that = this;

		this.setState({
			isLoading: true,
			errorMessage : undefined
		});

		console.log('here', openWeatherMap.getValue());
		
		openWeatherMap.getTemp(location).then(function(temp){
			that.setState({
				location: location,
				temp : temp,
				isLoading: false
			});
		}, function(err){
			
			that.setState({
				isLoading: false,
				errorMessage: err.message
			});
		});
	},	

	handleExamples: function(){

	},



	render: function(){

		var {isLoading, temp, location, errorMessage } = this.state;
		
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


		function renderError(){
			if(typeof errorMessage === 'string'){
				return (
					<ErrorModal message={errorMessage}/>
					)
			}
		}

		return (
			<div>
				<h2 className="text-center page-title"> Weather </h2>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
				{renderError()}
			</div>
			);

	}

});

module.exports = Weather;