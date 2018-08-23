/**
 * Created by xiaosong
 */

const visibilityFilter = (state = "SHOW_ALL",action ) => {
	console.info(action)
    switch (action.type) {
        case 'SET_VISIBILITY':
            return action.filter
        default:
            return state
    }
    
}

export default visibilityFilter;