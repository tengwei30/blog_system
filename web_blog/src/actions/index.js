/***
 Created by xiaosong
**/

let textId = 0;

// 添加数据
export const addTodo = (text) => {
	return {
		type: 'ADD_TODO',
		id: textId++,
		text
	}
}

//底部显示状态
export const setVisibility = (filter) => {
    return {
        type: 'SET_VISIBILITY',
        filter
    }
}

// 切换数据
export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}

//删除
export const deleteTodo = (id) => {
    return {
        type: 'DEL_TODO',
        id
    }
}

