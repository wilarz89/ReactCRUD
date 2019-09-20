import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { wrapComponentWithState, usersData } from '../../state';
import { injectState } from 'freactal';

const columns = [
    {
        Header: 'Id',
        headerStyle: { whiteSpace: 'unset' },
        accessor: 'id',
        style: { whiteSpace: 'unset' },
        Cell: props => <span className="number">{props.value}</span>,
    },
    {
        Header: 'Name',
        headerStyle: { whiteSpace: 'unset' },
        accessor: 'name',
        style: { whiteSpace: 'unset' },
    },
    {
        Header: 'User',
        headerStyle: { whiteSpace: 'unset' },
        accessor: 'username',
        style: { whiteSpace: 'unset' },
    },
    {
        Header: 'Edit',
        Cell: row => (
            <div>
                <li>
                    <Link to="/edit/:id" className="link">
                        Editar
                    </Link>
                </li>
            </div>
        ),
    },
    {
        Header: 'Delete',
        Cell: row => (
            <div>
                <button>Delete</button>
            </div>
        ),
    },
];

const UserTable = injectState(({ state, effects }) => {
    const onSubmit = data => {
        console.log(state);

        return effects.setUsers(data);
    };

    return (
        <div style={{ padding: '50px' }}>
            <ReactTable
             onSubmit={onSubmit} data={usersData} columns={columns} />
        </div>
    );
});

export default UserTable;
