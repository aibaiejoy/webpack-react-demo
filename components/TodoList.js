import React, {PropTypes} from 'react'
import {findDOMNode, Component} from 'react-dom';

class Todo extends React.Component {
	render() {
		return (
			<li onClick={this.props.onClick}
			style={{textDecoration:this.props.completed ? 'line-through': ''}}
			>{this.props.text}</li>
		)
	}
}

class TodoList extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<ul>
				{this.props.todos.map((todo, index) => {
					return <Todo {...todo} key={index}
						onClick={()=>this.props.onTodoClick(todo, index)}
					/>
				})}
			</ul>
		)
	}
}

export default TodoList;


