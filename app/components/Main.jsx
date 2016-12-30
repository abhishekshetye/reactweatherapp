var React = require('react');
var Nav = require('Nav');

var Main = React.createClass({

	handleSearchs: function(a){
		alert(a);

	},

	render: function(){

		return (
			<div>
				<Nav></Nav>
				<div className="columns medium-6 large-4 small-centered">
					{this.props.children}
				</div>
			</div>
			);

	}

});

module.exports = Main;