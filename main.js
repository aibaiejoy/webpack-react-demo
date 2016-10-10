import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

export default class App extends Component {
	constructor(props) {
        super(props);
        this.displayName = 'AddTodo';

        this.state = {
        	todos:[
				{
					text: 'Use Redux',
					completed: true
				}, {
					text: 'Learn to connect it to React',
					completed: false
				}
			]
        }
    }

    addTodo(text) {
    	this.state.todos.push({
			text : text,
			completed : false
		})
    	this.setState({
    		todos: this.state.todos
    	})
    }

    onTodoClick(target, index){
    	console.log(target, index);
    	this.state.todos.map((todo, index) => {
    		if(target === todo){
    			todo.completed = !todo.completed;
    		}
    	})
    	this.setState({
    		todos : this.state.todos
    	})
    }

    onFilterChange(filter) {
    	//这里因为state不段变化，没有保留原始state，而且state是值引用。导致结果不正确
    	var todosDefault = this.state.todos;
    	if(filter == 'SHOW_COMPLETED'){
    		let todos = todosDefault.filter((item)=>{
    			return item.completed
    		})
    		this.setState({
    			todos : todos
    		})
    	}else if(filter == 'SHOW_ACTIVE'){
			let todos = todosDefault.filter((item)=>{
    			return !item.completed
    		})
    		this.setState({
    			todos : todos
    		})
    	}else{
    		this.setState({
    			todos : todosDefault
    		})
    	}



    }

	render() {
		var self = this;
		return (
			<div>
				<AddTodo
					onAddClick={
						text =>{
							console.log('add todo', text);
							self.addTodo(text);
						}
					} 
				/>
				<TodoList todos={self.state.todos} 
					onTodoClick={
						(todo, index)=>{
							console.log('todoClick', todo)
							this.onTodoClick(todo, index)
						}
					}
				/>

				<Footer onFilterChange={
					(filter)=>{
						console.log(filter)
						this.onFilterChange(filter)
					}
				}/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));