import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AddTodo from './components/AddTodo';
// import TodoList from '../components/TodoList';
// import Footer from '../components/Footer';

export default class App extends Component {
	render() {
		return (
			<div>
				<AddTodo
					onAddClick={text =>
						console.log('add todo', text)
					} />
				
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));