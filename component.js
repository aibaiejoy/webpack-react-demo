/*var React = require('react');
var ReactDOM = require('react-dom');
var Component = React.createClass({
	render: function(){
		return <h1>hello world</h1>
	}
})*/

import React from 'react';

class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Hello';
        this.state = {
        	title : 'Hello title , hello world'
        }
    }
    render() {
        return <div>{this.state.title}</div>;
    }
}

export default Hello;

