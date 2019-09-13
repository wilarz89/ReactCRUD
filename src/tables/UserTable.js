import React from 'react'
import ReactTable from 'react-table'

const usersData = [
    { id: 1, name: 'Wilson', username: 'wilarz89' },
    { id: 2, name: 'Testing', username: 'testaccount' },
    { id: 3, name: 'Pruebs', username: 'pruebas.1.1' },
];

const columns = [
    {
        
    Header: 'Id',
    headerStyle: { whiteSpace: 'unset' },
    accessor: 'id',
    style: { whiteSpace: 'unset' },
    Cell: props => <span className='number'>{props.value}</span> 
    },{
    Header: 'Name',
    headerStyle: { whiteSpace: 'unset' },
    accessor: 'name', 
    style: { whiteSpace: 'unset' },
    },{
    Header: 'User',
    headerStyle: { whiteSpace: 'unset' },
    accessor: 'username',
    style: { whiteSpace: 'unset' },
    },
]

const UserTable = props => {
    return (
    <div style={{ padding: '50px' }}>
    <ReactTable
    data={usersData}
    columns={columns}
  />
  </div>
    );
}

export default UserTable