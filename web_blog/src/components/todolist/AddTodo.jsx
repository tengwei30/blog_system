import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';

class AddTodo extends React.Component{
	constructor(props) {
	  super(props);
	
	  this.state = {};
	  this.input;
	}
	onSubmit = (e) => {
		e.preventDefault();	//如果用form的submit做事件，阻止冒泡必须加，不然会怎么样自己尝试
		let inputVal = this.input.value.trim();
		if(inputVal) {
			this.props.dispatch(addTodo(inputVal));
			this.input.value = '';
		}else{
			alert('不能添加空！')
		}
	}

	render(){
		return(
			<div>
                <form onSubmit={this.onSubmit}>
                    <input placeholder="你想做点什么" ref={r => this.input = r}
                           className="todo-input"/>
                    <button type="submit" className="todo-btn">
                        添加任务
                    </button>
                </form>
            </div>
		)
	}
}

export default connect()(AddTodo);