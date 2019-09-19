import { provideState } from 'freactal';

// Setting state

export const wrapComponentWithState = provideState({
    initialState: () => ({ users: {} }),
    effects: {
        setUsers: (effects, user) => state => {
            console.log('state', state);
            return Object.assign({}, state, {
                ...state,
                users: { ...user },
            });
        },

        setCurrentUser: (effects, user) => state => {
            console.log('state', state);

            return Object.assign({}, state, {
                ...state,
                currentUser: { user },
            });
        },
        setEditing: (effects, edit) => state =>
            Object.assign({}, state, { editing: edit }),
    },
});

export const usersData = [
    { id: 1, name: 'Wilson', username: 'wilarz89' },
    { id: 2, name: 'Testing', username: 'testaccount' },
    { id: 3, name: 'Prueba', username: 'pruebas.1.1' },
];

// 	setUsers(users.filter(user => user.id !== id))
// }

// const updateUser = (id, updatedUser) => {
// 	setEditing(false)

// 	setUsers(users.map(user => (user.id === id ? updatedUser : user)))
// }

// const editRow = user => {
// 	setEditing(true)

// 	setCurrentUser({ id: user.id, name: user.name, username: user.username })
// }
