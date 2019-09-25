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

        // changes user
        handleEdit: (effects, user) => state => {
            let userNum = user.id;
            let userOld = usersData.find(usr => usr.id === userNum);
            userOld = {
                ...userOld,
                id: user.id,
                name: user.name,
                username: user.username,
            };
           
            usersData[userNum] = userOld;
            console.log("edit user",usersData)
        },

        // delete user
        handleDelete: (effects, user) => state => {
            let userNum = user.id;
            let userOld = usersData.find(usr => usr.id === userNum);
            usersData[userNum] = null;
            console.log("edit user",usersData)

        },
    },
});
