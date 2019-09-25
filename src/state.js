import { provideState, update } from 'freactal';

// provides state to be consumed
export const wrapComponentWithState = provideState({
    initialState: () => ({ usersData: [{ id: '1', name: 'Wilson', username: 'wilarz89' },
    { id: '2', name: 'Testing', username: 'testaccount' },
    { id: '3', name: 'Prueba', username: 'pruebas.1.1' }] }),
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
        // Edit user
        handleEdit: update(
            (state, value) => (
                console.log(state, 'val', value),
                {
                    user: value,
                }
            ),
        ),
        // delete user
        handleDelete: update({ usersData: {} }),
    },
});
