import React, { useState, Fragment } from 'react'
import AddUserForm from './forms/AddUserForm'
import UserTable from './tables/UserTable'
import './styles.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {provideState} from 'freactal'

const App = () => {

	const initialFormState = { id: null, name: '', username: '' }

	// Setting state
	const [ users, setUsers ] = provideState()
	const [ currentUser, setCurrentUser ] = provideState(initialFormState)
	const [ editing, setEditing ] = provideState(false)

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, username: user.username })
	}

	return (
		<div className="container">
			<h1>Simple CRUD app</h1>
			<div className="flex-row">
				<div className="flex-large">
        <Fragment>
							<h2>Add user</h2>
							<AddUserForm addUser={addUser} />
						</Fragment>
		    <Router>
          <Route path="/add" component={AddUserForm}/>
        </Router>
				</div>
				<div className="flex-large">
					<h2>View users</h2>
          {/* <UserTable users={users} editRow={editRow} deleteUser={deleteUser} /> */}
          <UserTable/>

				</div>
			</div>
		</div>
	)
}

export default App;
