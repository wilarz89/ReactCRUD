import React, {  Fragment } from 'react'
import AddUserForm from './forms/AddUserForm'
import UserTable from './tables/UserTable'
import './styles.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './state';

const App = () => {




	return (
		<div className="container">
			<h1>Simple CRUD app</h1>
			<div className="flex-row">
				<div className="flex-large">
        <Fragment>
							<h2>Add user</h2>
							{/* <AddUserForm addUser={addUser} /> */}
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
