import { createActions } from 'redux-actions';
import * as api from "../../lib/api";

export const LOAD_USERS = "LOAD_USERS";
export const ADD_USER = "ADD_USER";
export const REMOVE_USER = "REMOVE_USER";

export const {
	loadUsers,
	addUser,
	removeUser
} = createActions(
	LOAD_USERS,
	ADD_USER,
	REMOVE_USER
);

export const fetchUsers = () =>
	dispatch =>
		api
			.getUsers()
			.then(users => dispatch(loadUsers(users)))
			.catch(err => dispatch(loadUsers(err)))

export const createUser = user =>
	dispatch =>
		api
			.createUser(user)
			.then((user) => dispatch(addUser(user)))
			.catch(err => dispatch(addUser(err)))

export const deleteUser = id =>
	dispatch =>
		api
			.deleteUser(id)
			.then(() => dispatch(removeUser(id)))
			.catch(err => dispatch(removeUser(err)))


