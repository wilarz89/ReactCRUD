import { provideState, update } from 'freactal';

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

        // changes user
        handleEdit: update((state, user) => ({ updateUser: user })),

        // delete user
        handleDelete: update( usersData.id =null )
    },
});
