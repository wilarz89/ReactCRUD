import { provideState } from 'freactal';

// provides state to be consumed
export const wrapComponentWithState = provideState({
    initialState: () => ({
        usersData: [
            { id: '1', name: 'Wilson', username: 'wilarz89' },
            { id: '2', name: 'Testing', username: 'testaccount' },
            { id: '3', name: 'Prueba', username: 'pruebas.1.1' },
        ],
    }),
    effects: {
        // sets users in table after add
        setUsers: (effects, user) => state => {
            console.log(user, state);

            return Object.assign({}, state, {
                ...state,
                usersData: [
                    ...state.usersData,
                    { ...user, id: state.usersData.length + 1 },
                ],
            });
        },

        handleEdit: (effects, user) => state => {
            let id = user.id - 1;
            let oldUser = state.usersData[id];
            console.log(user, oldUser, '=>', state);

            return Object.assign(
                {},
                state,
                {
                    ...oldUser,
                    id: user.id,
                    name: user.name,
                    username: user.username,
                },
                console.log('state=>', state),
            );
        },
        // delete user
        handleDelete: (effects, user) => state => {
            let id = user.id - 1;
            let oldUser = state.usersData[id];

            return Object.assign({}, state, {
                ...oldUser,
                id: null,
                name: null,
                username: null,
            });
        },
    },
});
