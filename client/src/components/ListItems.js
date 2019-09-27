import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'
import { connect } from 'react-redux'
import {updateTask} from '../actions/index'
import {deleteTask} from '../actions/index'
import '../App.css';

// function Todo({ todo, index, completeTodo, removeTodo }) {
// 	return (
// 		<div className="todo" style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
// 			{todo.text}

// 			<div>
// 				<button className="list-button" onClick={() => completeTodo(index)}>
// 					Task Complete
// 				</button>
// 				<button className="list-button" onClick={() => removeTodo(index)}>
// 					x
// 				</button>
// 			</div>
// 		</div>
// 	);
// }

// function TodoForm({ addTodo }) {
// 	const [ value, setValue ] = useState('');

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		if (!value) return;
// 		addTodo(value);
// 		setValue('');
// 	};

// 	return (
// 		<form onSubmit={handleSubmit}>
// 			<input type="text" className="input" value={value} onChange={(e) => setValue(e.target.value)} />
// 		</form>
// 	);
// }

const  ListItems = (props) => {
	console.log(props)
	const [ todos, setTodos ] = useState([]);

	useEffect( () =>{
		setTodos(props.listitems)

	}, [props.listitems])
		
	const addTodo = (text) => {
		const newTodos = [ ...todos,  text  ];
		setTodos(newTodos);
	};

	const completeTodo = (id) => {
		
		const newTodos = [ ...todos ];
		 const update = newTodos.map( todo =>{
			 if(id === todo.id){
				 console.log(todo.id)
				 console.log(id)
				 todo.completed = !todo.completed
			 }
			 
			 return todo
		 })
		 props.updateTask(update)
		 setTodos(update)

		
		
		// if( newTodos[index].isCompleted === false){
		//   newTodos[index].isCompleted = true
		//   newTodos[index].completed = true
		//   setTodos(newTodos)
		// }
		//  newTodos[index].isCompleted = false
		//  newTodos[index].completed = false
		//  setTodos(newTodos)
		

		
		
	};

	const removeTodo = (id) => {
		const newTodos = [ ...todos ];
		const update = newTodos.filter( todo =>(id !== todo.id
		))
		props.deleteTask(update)
		setTodos(update)
		
	};
	

	return (
		<div>
			<div className="list">
				{ todos && todos.map((todo,index )=> (
					
					<TodoItem key={index} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo} index={index} update={props.updateTask}/>
					
				))}
				
			</div>,
			<div>
			<TodoForm addTodo={addTodo} />
			</div>
		</div>
	);
}

const mapStatetoProps = state => {
    console.log(state)
    return {
        state
    }
}
export default connect(mapStatetoProps, {updateTask,deleteTask} )(ListItems)

