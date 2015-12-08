var React = require('react');
var ReactDOM = require('react-dom');
var Component = require('./components/Component');

var reactComponent = ReactDOM.render(
	<Component />,
	document.getElementById('app'),
	function() {
		console.log('After render');
	}
);
