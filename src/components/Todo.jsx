import React, { useEffect, useState } from 'react';
import {
	createTodo,
	getUserTodos,
	deleteTodo,
	editStatus,
	editTask,
} from '../services/action';
import { ToastContainer } from 'react-toastify';

const TodoComponent = () => {
	const [todo, setTodo] = useState('');
	const [editedTodo, setEditedTodo] = useState('');
	const [id, setId] = useState();
	const [display, setDisplay] = useState(false);
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

	const editTodoStatus = (event, id, status) => {
		event.preventDefault();
		switch (status) {
			case 'to_do':
				editStatus(id, 'done').then(updatedTodo => {
					setUserTodos([...userTodos, updatedTodo]);
				});
				break;
			case 'done':
				editStatus(id, 'to_do').then(updatedTodo => {
					setUserTodos([...userTodos, updatedTodo]);
				});
				break;
		}
	};
	const prepState = id => {
		setDisplay(true);
		setId(id);
		return id;
	};
	const handleEditTask = event => {
		event.preventDefault();
		editTask(id, editedTodo);
		setUserTodos([...userTodos, editedTodo]);
		setDisplay(false);
	};
	const renderUserTodos = () => {
		if (userTodos && userTodos.length) {
			const todoList = userTodos[0];
			return todoList.map(todo => {
				return (
					<li className="list-group-item" key={todo.id}>
						<div>
							<button
								className={
									todo.state === 'done'
										? 'fas fa-check-square float-left mr-3'
										: 'float-left mr-3'
								}
								onClick={e => editTodoStatus(e, todo.id, todo.state)}
							></button>
							{todo.description}
							<button
								className="fas fa-trash float-right ml-3"
								onClick={e => handleDelete(e, todo.id)}
							></button>
							<button
								className="fas fa-edit float-right ml-3"
								onClick={e => prepState(todo.id)}
							></button>{' '}
						</div>
					</li>
				);
			});
		}
	};
	return (
		<div className="container">
			<ToastContainer />

			<div className="col-md-12">
				<h3 className="text-center m-3">To-do List</h3>
			</div>
			{!display ? (
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
			) : (
				''
			)}
			<div className="col-md-12">
				<div className="col-md-12"></div>
				<div className="col-md-12">
					<div className="col-md-3"></div>
					<div className="col-md-7 m-auto">
						<ul className="list-group">
							{display ? (
								<div className="input-group mb-3">
									<input
										type="text"
										className="form-control"
										placeholder={todo.description}
										aria-label="something to do"
										aria-describedby="input_todo"
										id="user_input"
										value={editedTodo}
										onChange={e => setEditedTodo(e.target.value)}
									/>
									<div className="input-group-append">
										<button
											className="btn btn-outline-success"
											type="button"
											id="add_button"
											onClick={e => handleEditTask(e)}
										>
											Edit Task
										</button>
									</div>
								</div>
							) : (
								renderUserTodos()
							)}
						</ul>
					</div>
					<div className="col-md-3"></div>
				</div>
			</div>
		</div>
	);
};
export default TodoComponent;
