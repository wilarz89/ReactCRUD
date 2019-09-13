import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'


const usersData = [
    { id: 1, name: 'Wilson', username: 'wilarz89' },
    { id: 2, name: 'Testing', username: 'testaccount' },
    { id: 3, name: 'Pruebs', username: 'pruebas.1.1' },
];

	// const deleteUser = id => {
	// 	setEditing(false)

	// 	setUsers(users.filter(user => user.id !== id))
	// }

	// const updateUser = (id, updatedUser) => {
	// 	setEditing(false)

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
    {
        Header:'Edit',
        Cell: row => (
            <div>
                {/* <button onClick={() => handleEdit(row.original)}>Edit</button> */}
            </div>
        )
        },
        {
        Header:'Delete',
        Cell: row => (
            <div>
            {/* <button onClick={() => handleDelete(row.original)}>Delete</button> */}
            </div>
           
        )
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

export default UserTable;