import { provideState } from 'freactal';

export let usersData = [
    { id: 1, name: 'Wilson', username: 'wilarz89' },
    { id: 2, name: 'Testing', username: 'testaccount' },
    { id: 3, name: 'Prueba', username: 'pruebas.1.1' },
];

// provides state to be consumed

export const wrapComponentWithState = provideState({
    initialState: () => ({ usersData: {} }),
    effects: {
        // sets users in table after add
        setUsers: (effects, user) => state => {
            user.id = usersData.length + 1;
            let data = [...usersData, { ...user }];
            usersData = data;
            console.log(usersData);
            return Object.assign({}, state, {
                ...state,
                usersData: { user },
            });
        },
        // sets the selected user in the table
        setCurrentUser: (effects, user) => state => {
            console.log('state', state);

            return Object.assign({}, state, {
                ...state,
                currentUser: { user },
            });
        },
        // changes user
        setEditing: (effects, edit) => state => {
            Object.assign({}, state, { editing: edit });
        },
        // delete user
        handleDelete: (effects, delUser) => state => {
            Object.assign({}, state, { deleting: delUser });
        },
    },
});

// const updateUser = (id, updatedUser) => {
// 	setEditing(false)

// 	setUsers(users.map(user => (user.id === id ? updatedUser : user)))
// }

// const editRow = user => {
// 	setEditing(true)

// 	setCurrentUser({ id: user.id, name: user.name, username: user.username })
// }
