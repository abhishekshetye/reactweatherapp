var React = require('react');
var {Link} = require('react-router');



var Examples = (props) => {

		return (
			<div>
			<h2 className="text-center"> Examples  </h2>
			<p className="text-center"> Here are few examples to try out.</p>
			
			<ol>
				<li>
				<Link to="/?location=Philedelphia">Philedelphia</Link>
				</li>
				<li>
				<Link to="/?location=Mumbai">Mumbai</Link>
				</li>
				<li>
				<Link to="/?location=Rio">Rio</Link>
				</li>
			</ol>

			</div>
			);


};

module.exports = Examples;