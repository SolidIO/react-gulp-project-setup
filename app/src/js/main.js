var React = require('react');
var Component = require('./components/Component');

var reactComponent = ReactDOM.render(
	<Component />,
	document.getElementById('app'),
	function() {
		console.log('After render');
	}
);
