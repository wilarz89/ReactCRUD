import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
// import { usersData } from '../../state';
import { injectState } from 'freactal';

const UserTable = injectState(({ state, effects }) => {
    const {usersData}=state
    const handleUsers = data => {
        console.log(state);

        return effects.handleUsers(data);
    };

    return (
        <div style={{ padding: '50px' }}>
            <ReactTable
                onSubmit={handleUsers}
                data={usersData}
                columns={columns}
            />
        </div>
    );
});

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
        Cell: ({ row }) => (
            <Link to={{ pathname: `/edit/${row.id}` }}>Editar </Link>
        ),
    },
    {
        Header: 'Delete',
        Cell: ({ row }) => (
            <Link to={{ pathname: `/delete/${row.id}` }}>Delete </Link>
        ),
    },
];

export default UserTable;
