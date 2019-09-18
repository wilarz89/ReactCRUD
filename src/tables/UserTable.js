import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import EditUserForm from "../forms/EditUserForm";
import { wrapComponentWithState, usersData } from "../state";

const deleteUser = id => {
  wrapComponentWithState.setUsers(usersData.filter(user => user.id !== id));
};

const columns = [
  {
    Header: "Id",
    headerStyle: { whiteSpace: "unset" },
    accessor: "id",
    style: { whiteSpace: "unset" },
    Cell: props => <span className="number">{props.value}</span>
  },
  {
    Header: "Name",
    headerStyle: { whiteSpace: "unset" },
    accessor: "name",
    style: { whiteSpace: "unset" }
  },
  {
    Header: "User",
    headerStyle: { whiteSpace: "unset" },
    accessor: "username",
    style: { whiteSpace: "unset" }
  },
  {
    Header: "Edit",
    Cell: row => (
      <div>
        <Router>
          <Link to="/edit/:id" className="link">
            Editar
          </Link>
          <Route exact path="/edit/:id" component={withRouter(EditUserForm)} />
        </Router>
      </div>
    )
  },
  {
    Header: "Delete",
    Cell: row => (
      <div>
        <button onClick={deleteUser}>Delete</button>
      </div>
    )
  }
];

const UserTable = props => {
  return (
    <div style={{ padding: "50px" }}>
      <ReactTable data={usersData} columns={columns} />
    </div>
  );
};

export default wrapComponentWithState(UserTable);
