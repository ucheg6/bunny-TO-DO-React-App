import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../services/action';

const UsersComponent = () => {
	const [usersList, setUsersList] = useState([]);
	useEffect(() => {
		getUsers().then(usersList => {
			setUsersList(usersList);
		});
	}, [usersList.length]);

	const renderUsersList = () => {
		if (usersList && usersList.length) {
			return usersList.map(user => (
				<li className="list-group-item" key={user.id}>
					{user.Name}
					<button
						className="fas fa-trash float-right ml-3 "
						onClick={e => handledelete(e, user.id)}
					></button>
					<button className="fas fa-edit float-right ml-3"></button>
				</li>
			));
		}
	};
	const handledelete = (event, id) => {
		event.preventDefault();
		deleteUser(id).then(newUsersList => {
			setUsersList(usersList.filter(user => user.id !== id));
		});
	};
	return (
		<div className="container">
			<div className="col-md-12">
				<h3 className="text-center m-3">Users</h3>
			</div>
			<div className="col-md-12">
				<div className="col-md-12"></div>
				<div className="col-md-12">
					<div className="col-md-3"></div>
					<div className="col-md-7 m-auto">
						<ul className="list-group">{renderUsersList()}</ul>
					</div>
					<div className="col-md-3"></div>
				</div>
			</div>
		</div>
	);
};
export default UsersComponent;
