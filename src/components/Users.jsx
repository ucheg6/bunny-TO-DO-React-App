import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser, editUser } from '../services/action';
import { Link } from 'react-router-dom';

const UsersComponent = () => {
	const [usersList, setUsersList] = useState([]);
	const [editedUser, setEditedUser] = useState('');
	const [userId, setId] = useState();
	const [display, setDisplay] = useState(false);

	useEffect(() => {
		getUsers().then(usersList => {
			setUsersList(usersList);
		});
	}, [usersList.length]);

	const prepState = id => {
		setDisplay(true);
		setId(id);
		return id;
	};
	const renderUsersList = () => {
		if (usersList && usersList.length) {
			return usersList.map(user => (
				<li className="list-group-item" key={user.id}>
					<Link to={`/userTasks/${user.id}`}>{user.Name}</Link>
					<button
						className="fas fa-trash float-right ml-3 "
						onClick={e => handledelete(e, user.id)}
					></button>
					<button
						className="fas fa-edit float-right ml-3"
						onClick={e => prepState(user.id)}
					></button>
				</li>
			));
		}
	};
	const handledelete = (event, id) => {
		event.preventDefault();
		deleteUser(id).then(() => {
			setUsersList(usersList.filter(user => user.id !== id));
		});
	};
	const handleEditUser = event => {
		event.preventDefault();
		editUser(userId, editedUser);
		setUsersList([...usersList, editedUser]);
		setDisplay(false);
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
						<ul className="list-group">
							{display ? (
								<div className="input-group mb-3">
									<input
										type="text"
										className="form-control"
										placeholder="name"
										aria-label="something to do"
										aria-describedby="input_todo"
										id="user_input"
										value={editedUser}
										onChange={e => setEditedUser(e.target.value)}
									/>
									<div className="input-group-append">
										<button
											className="btn btn-outline-success"
											type="button"
											id="add_button"
											onClick={e => handleEditUser(e)}
										>
											Submit
										</button>
									</div>
								</div>
							) : (
								renderUsersList()
							)}
						</ul>
					</div>
					<div className="col-md-3"></div>
				</div>
			</div>
		</div>
	);
};
export default UsersComponent;
