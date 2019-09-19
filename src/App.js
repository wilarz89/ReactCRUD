import React, { Fragment } from 'react';
import AddUserForm from './components/forms/AddUserForm';
import UserTable from './components/tables/UserTable';
import './styles.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
} from 'react-router-dom';
import { wrapComponentWithState } from './state';
import EditUserForm from './components/forms/EditUserForm';

const App = () => {
    return (
        <div className="container">
            <h1>Simple CRUD app</h1>

            <div className="flex-row">
                <div className="flex-large">
                    <Router>
                        <Fragment>
                            <Link to="/add" className="link">
                                <h2>Add user</h2>
                            </Link>
                            <div className="flex-large">
                                <Link to="/list" className="list">
                                    {' '}
                                    <h2>View users</h2>
                                </Link>
                            </div>
                        </Fragment>
                        <Switch>
                            <Route
                                path="/add"
                                component={AddUserForm}
                            />
                            <Route
                                path="/list"
                                component={UserTable}
                            />
                            <Route
                                path="/edit/:id"
                                component={EditUserForm}
                            />
                        </Switch>
                    </Router>
                </div>
            </div>
        </div>
    );
};

export default wrapComponentWithState(App);
