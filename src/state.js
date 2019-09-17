import { provideState } from "freactal";

// Setting state

// const [ users, setUsers ] = useState()
export const wrapComponentWithState = provideState({
  initialState: () => ({ users: "" }),
  effects: {
    setUsers: (effects, user) => state =>
      Object.assign({}, state, { users: user }),
    setCurrentUser: (effects, user) => state =>
      Object.assign({}, state, { currentUser: user }),
    setEditing: (effects, edit) => state =>
      Object.assign({}, state, { editing: edit })
  }
});
// const [ currentUser, setCurrentUser ] = provideState(initialFormState)

// const [ editing, setEditing ] = provideState(false)

// const deleteUser = id => {
// 	setEditing(false)

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
