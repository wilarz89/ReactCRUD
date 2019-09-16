import React, { useState, Fragment } from 'react'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'
import './styles.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => {

	const initialFormState = { id: null, name: '', username: '' }

	// Setting state
	const [ users, setUsers ] = useState()
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

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
		    <Router>
          <Route path="/add" component={AddUserForm}/>
          <Route path="/edit" component={EditUserForm}/>
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
