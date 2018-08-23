/***
 Created by xiaosong
**/

import React from 'react';


const Todo = ({ onClick, onDelClick, completed, text }) => {
	return(
		<li className="todo-list_li" style={{ textDecoration:completed ? "line-through" : "none" }}>
            <input type="checkbox" className="pull-left" onClick={ onClick } defaultChecked={ completed } />
            { text }
            <button className="todo-list_del" onClick={ onDelClick }>删除</button>
        </li>
	)
}

export default Todo;

