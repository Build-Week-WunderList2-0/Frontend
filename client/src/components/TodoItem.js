import React, {useState, useEffect} from 'react'

const TodoItem = ( { todo, completeTodo,removeTodo, update}) => {
	console.log(update)
	return (
		 <div className="todo" style={{ textDecoration: todo.completed === true ? 'line-through' : '' }}>
			<div>
		   <p>{todo.title}</p>
		   </div>
			
			<div>
				<button className="list-button" onClick={(e) =>{ 
					e.preventDefault() 
					// update(todo.id)
					completeTodo(todo.id)
					}} >
					Task Complete
				</button>
				<button className="list-button" onClick={() => removeTodo(todo.id)}>
					x
				</button>
			</div> 
		</div>
	);
}
export default TodoItem