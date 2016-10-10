import React, {PropTypes} from 'react'
import {findDOMNode, Component} from 'react-dom';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'AddTodo';
    }
    render() {
    	var self = this;
        return (
        	<div>
        		<input type="text" ref="input"/>
        		<button onClick={e => this.handleClick(e)}>add</button>
        	</div>
        );
    }

    handleClick(e){
    	console.log(this, "----", e);
    	const node = findDOMNode(this.refs.input);
    	const text = node.value.trim();
    	this.props.onAddClick(text);
    	node.value = "";
    }
}

export default AddTodo;
