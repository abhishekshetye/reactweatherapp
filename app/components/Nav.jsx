var React = require('react');
var {Link, IndexLink} = require('react-router');

//presentational components
/*
var Nav = () => {
	return (
		<h1>presentational components </h1>
		);
} */

var Nav = React.createClass({

	onSearch: function(e){
		e.preventDefault();
		var a = this.refs.weather.value;
		var encoded = encodeURIComponent(a);
		if(a.length > 0){
			this.refs.weather.value = '';
			window.location.hash = '#/?location=' + encoded;
		}
	},

	render: function(){

		return (
			/*
			<div>
				<h2> Navigation </h2>
				<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Get weather</IndexLink>
				<Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
				<Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
			</div>
			*/
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
					<li className="menu-text">React Weather App</li>
					<li>
						<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Get weather</IndexLink>
					</li>
					<li>
						<Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
					</li>
					<li>
						<Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
					</li>
					</ul>
				</div>
				<div className="top-bar-right">
					<form onSubmit={this.onSearch}>
						<ul className="menu">
							<li>
							<input type="search" ref="weather" placeholder="Search Weather"/>
							</li>
							<li>
							<input type="submit" className="button" value="Get Weather"/>
							</li>
						</ul>
					</form>
				</div>
				
			</div>
			);

	}

});

module.exports = Nav;