import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getUserTodo } from '../services/action';
const UserTaskComponent = () => {
	const router = useHistory();
	const userId = router.location.pathname.toString().split('/')[2];

	const [userTodos, setUserTodos] = useState([]);
	useEffect(() => {
		getUserTodo(userId).then(userTodos => {
			setUserTodos([userTodos]);
		});
	}, [userTodos.length]);

	const RenderUserTodos = () => {
		if (userTodos && userTodos.length) {
			const todoList = userTodos[0];
			return todoList.map(todo => {
				return (
					<li className="list-group-item" key={todo.id}>
						<div>{todo.description}</div>
					</li>
				);
			});
		} else {
			return (
				<li className="list-group-item">
					<div>No Task for this user!</div>
				</li>
			);
		}
	};
	return (
		<div className="col-md-12">
			<ul>
				<div className="col-md-8">
					<h3 className="text-center m-3">Tasks</h3>
				</div>
				<div className="col-md-12"></div>
				<div className="col-md-12">
					<div className="col-md-3"></div>
					<div className="col-md-7 m-auto">
						<ul className="list-group">{RenderUserTodos()}</ul>
					</div>
					<div className="col-md-3"></div>
				</div>
			</ul>
		</div>
	);
};
export default UserTaskComponent;
