/**
 * Created by xiaosong 2017/09/25
 */

import React from 'react';
import Top from './components/todolist/Top.jsx';
import AddTodo from './components/todolist/AddTodo.jsx';
import TodoList from './components/todolist/TodoList.jsx';
import './components/todolist/style.css';
// import Home from './components/home'


export default class App extends React.Component {
	render() {
		return (
			<div className="todo-box">
        		<div className="todo-innerBox">
					<Top />
					<AddTodo />
					<TodoList />
					{/* <Home /> */}
				</div>
			</div>
			
		)
	}
}