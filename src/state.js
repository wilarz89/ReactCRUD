import { provideState } from 'freactal';

// provides state to be consumed
let usersData = [];
export const wrapComponentWithState = provideState({
    initialState: () => ({usersData :[]}),
    effects: {
        // sets users in table after add
        setUsers: (effects, user) => state => {
            console.log(user,state)
        
            return Object.assign({}, state, {
                ...state,
                usersData: [ ...state.usersData, {...user,id:state.usersData.length} ],
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
            console.log('edit user', usersData);
        },

        // delete user
        handleDelete: (effects, user) => state => {
            let userNum = user.id;
            let userOld = usersData.find(usr => usr.id === userNum);
            usersData[userNum] = null;
            console.log('edit user', usersData);
        },
    },
});
