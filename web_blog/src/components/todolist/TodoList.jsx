/***
 Created by xiaosong
**/

import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo,deleteTodo } from '../../actions';
import Todo from './Todos.jsx';

class TodoList extends React.Component{
	constructor(props) {
		super(props);
	}
	onTodoClick = (id) => {
		this.props.dispatch(toggleTodo(id));
	}
	onDelClick = (id) => {
		this.props.dispatch(deleteTodo(id));
	}
	render() {
		return(
			<ul className="list-group" >
				{
	                this.props.todos.map( (todo) => {
	                    return(
	                            <Todo
	                                key={todo.id}
	                                {...todo}
	                                onClick={() => this.onTodoClick(todo.id)}
	                                onDelClick={() => this.onDelClick(todo.id)}
	                            />
	                        )
	                })
	            }
			</ul>
		)
	}
}

// 用来订阅 store 更新，这里面的todos 会存在props中
const mapStateToProps = (state) => {
	switch(state.VisibilityFilter) {
		case "SHOW_ALL":
			return {
				todos: state.todos
			}
		case "SHOW_COMPLETED":
			return {
				todos: state.todos.filter(t => t.completed)
			}
		case "SHOW_ACTIVE":
            return {
            	todos: state.todos.filter(t => !t.completed)
            }
	}
}


export default connect(mapStateToProps)(TodoList);



