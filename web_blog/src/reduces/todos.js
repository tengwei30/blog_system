/***
 Created by xiaosong
**/


const todos = (state = [], action) => {
	switch(action.type) {
		case 'ADD_TODO':
			return [
				...state,
				{
					id:action.id,
					text:action.text,
					completed: false
				}
			]
		case 'DEL_TODO':
			return state.filter( (item,index) => {
				return item.id !== action.id
			})
		case 'TOGGLE_TODO':
			return state.map( t => {
                if(t.id != action.id) {
                    return t
                }
                return Object.assign({},t,{
                    completed : !t.completed
                    
                })
            })
		default:
			return state
	}
}

export default todos;

