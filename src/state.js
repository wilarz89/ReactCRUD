import { provideState } from 'freactal';

export let usersData = [
    { id: '1', name: 'Wilson', username: 'wilarz89' },
    { id: '2', name: 'Testing', username: 'testaccount' },
    { id: '3', name: 'Prueba', username: 'pruebas.1.1' },
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
        handleEdit: (effects, edit) => state => {
            edit.id = usersData.length + 1;
            let data = [...usersData, { ...edit }];
            usersData = data;
            console.log(usersData);
            Object.assign({}, state, {
                ...state,
                usersData: { edit },
            });
        },
        // delete user
        handleDelete: (effects, delUser) => state => {
            Object.assign({}, state, { deleting: delUser });
        },
    },
});
