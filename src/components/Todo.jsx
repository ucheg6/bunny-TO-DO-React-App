import React, { useEffect, useState } from 'react';
import { createTodo, getUserTodos, deleteTodo } from '../services/action';
const TodoComponent = () => {
	const [todo, setTodo] = useState('');
	const [state, setState] = useState(false);
	const [userTodos, setUserTodos] = useState([]);
	useEffect(() => {
		getUserTodos().then(userTodos => {
			setUserTodos([userTodos]);
		});
	}, [userTodos.length]);

	const onSubmit = event => {
		event.preventDefault();
		createTodo(todo);
		setUserTodos([...userTodos, todo]);
	};
	const handleDelete = (event, id) => {
		event.preventDefault();
		deleteTodo(id);
		setUserTodos([...userTodos, todo]);
	};
	const handleState = (event, id) => {
		event.preventDefault();
		// deleteTodo(id);
		setUserTodos([userTodos]);
	};
	const renderUserTodos = () => {
		if (userTodos && userTodos.length) {
			const todoList = userTodos[0];
			return todoList.map(todo => {
				console.log(todo);
				return (
					<li className="list-group-item" key={todo.id}>
						<button
							className="fas fa-check-square float-left mr-3"
							onClick={e => handleDelete(e, todo.id)}
						></button>
						{/* <button className="float-left mr-3"></button> */}
						{todo.description}
						<button
							className="fas fa-trash float-right ml-3"
							onClick={e => handleState(e, todo.id)}
						></button>
						<button className="fas fa-edit float-right ml-3"></button>
					</li>
				);
			});
		}
	};
	return (
		<div className="container">
			<div className="col-md-12">
				<h3 className="text-center m-3">To-do List</h3>
			</div>
			<div className="col-md-12">
				<div className="col-md-3"></div>
				<div className="col-md-6 m-auto">
					<div className="input-group mb-3">
						<input
							type="text"
							className="form-control"
							placeholder="something to do"
							aria-label="something to do"
							aria-describedby="input_todo"
							id="user_input"
							value={todo}
							onChange={e => setTodo(e.target.value)}
						/>
						<div className="input-group-append">
							<button
								className="btn btn-outline-success"
								type="button"
								id="add_button"
								onClick={e => onSubmit(e)}
							>
								Add
							</button>
						</div>
					</div>
				</div>
				<div className="col-md-3"></div>
			</div>
			<div className="col-md-12">
				<div className="col-md-12"></div>
				<div className="col-md-12">
					<div className="col-md-3"></div>
					<div className="col-md-7 m-auto">
						<ul className="list-group">{renderUserTodos()}</ul>
					</div>
					<div className="col-md-3"></div>
				</div>
			</div>
		</div>
	);
};
export default TodoComponent;
