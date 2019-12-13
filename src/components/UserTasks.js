import React, { useState, useEffect } from 'react';
import { getUserTodos } from '../services/action';
const UserTaskComponent = () => {
	const [userTodos, setUserTodos] = useState([]);
	useEffect(() => {
		getUserTodos().then(userTodos => {
			setUserTodos([userTodos]);
		});
	}, [userTodos.length]);

	const RenderUserTodos = () => {
		if (userTodos && userTodos.length) {
			console.log(userTodos);
			const todoList = userTodos[0];
			return todoList.map(todo => {
				return (
					<li className="list-group-item" key={todo.id}>
						<div>{todo.description}</div>
					</li>
				);
			});
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
