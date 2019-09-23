import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { usersData } from '../../state';
import { injectState } from 'freactal';

const UserTable = injectState(({ state, effects }) => {
    const handleEdit = data => {
        console.log(state);

        return effects.handleEdit(data);
    };

    return (
        <div style={{ padding: '50px' }}>
            <ReactTable
                onSubmit={handleEdit}
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
        Cell: row => (
            <div>
                {usersData.map(user => (
                    <Link
                        key={user.id}
                        to={{ pathname: `/edit/${user.id}` }}
                        id={user}
                        className="link"
                    >
                        Editar
                    </Link>
                ))}
            </div>
        ),
    },
];

export default UserTable;
