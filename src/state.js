import { provideState } from 'freactal';

export let usersData = [
    { id: 1, name: 'Wilson', username: 'wilarz89' },
    { id: 2, name: 'Testing', username: 'testaccount' },
    { id: 3, name: 'Prueba', username: 'pruebas.1.1' },
];

// Setting state

export const wrapComponentWithState = provideState({
    initialState: () => ({ usersData: {} }),
    effects: {
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
