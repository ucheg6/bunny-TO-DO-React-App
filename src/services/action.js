import axios from 'axios';
import { toastSuccess, toastError } from '../utilities/toast';
export const baseUrl = 'https://bunny-to-do.herokuapp.com/api/v1/';
export const createUserUrl = `${baseUrl}user`;
export const getUsersUrl = `${baseUrl}users`;
export const createTodoUrl = `${baseUrl}task`;

const headers = {
	'x-access-token': localStorage.getItem('userToken'),
};

export const createUser = async name => {
	await axios
		.post(createUserUrl, {
			Name: name,
		})
		.then(result => {
			toastSuccess(`User created successfully. ${result.data.message}`);
			localStorage.setItem('userToken', result.data.token);
			localStorage.setItem('userId', result.data.newUser[0].id);
			return result;
		});
};

export const getUsers = async () => {
	const result = await axios.get(getUsersUrl);
	return result.data.users;
};

export const createTodo = async todo => {
	const result = await axios.post(
		createTodoUrl,
		{
			description: todo,
		},
		{
			headers,
		},
	);
	toastSuccess(result.data.message);
	return result;
};

export const getUserTodos = async () => {
	const id = localStorage.getItem('userId');
	const getUserTodoUrl = `${baseUrl}tasks/${id}`;

	const result = await axios.get(getUserTodoUrl, {
		headers,
	});
	return result.data.foundTasks;
};

export const getOneUserTodos = async id => {
	const getUserTodoUrl = `${baseUrl}tasks/${id}`;

	const result = await axios.get(getUserTodoUrl, {
		headers,
	});
	return result.data.foundTasks;
};

export const deleteTodo = async id => {
	const deleteTodoUrl = `${baseUrl}tasks/${id}`;

	const result = await axios.delete(deleteTodoUrl, {
		headers,
	});
	toastSuccess(result.data.message);
	return result.data;
};
export const deleteUser = async id => {
	const deleteUserUrl = `${baseUrl}user/${id}`;

	const result = await axios.delete(deleteUserUrl, {
		headers,
	});
	toastSuccess(result.data.message);
	return result.data;
};

export const editStatus = async (id, state) => {
	const editTodoUrl = `${baseUrl}tasks/${id}`;
	const result = await axios.put(
		editTodoUrl,
		{ state },
		{
			headers,
		},
	);
	toastSuccess(result.data.message);
	return result.data.updatedTask;
};

export const editTask = async (id, description) => {
	const editTodoUrl = `${baseUrl}tasks/${id}`;
	const result = await axios.put(
		editTodoUrl,
		{ description },
		{
			headers,
		},
	);
	toastSuccess(result.data.message);
	return result.data.updatedTask;
};

export const editUser = async (id, name) => {
	const editUserUrl = `${baseUrl}user/${id}`;
	const result = await axios.put(
		editUserUrl,
		{ Name: name },
		{
			headers,
		},
	);
	toastSuccess(result.data.message);
	return result.data.updatedUser;
};
